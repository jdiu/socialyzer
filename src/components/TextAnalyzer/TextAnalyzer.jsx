import React, { useState } from 'react';
import { Form, Button, Table } from 'semantic-ui-react';

const tableHeaders = ['Identity Attack', 'Insult', 'Obscenity', 'Severe Toxicity', 'Sexually Explicit', 'Threat', 'Toxicity'];

export default function TextAnalyzer() {
  const [analyzeText, setAnalyzeText] = useState('');
  const [predictions, setPredictions] = useState([]);

  const parseResult = (match) => {
    switch(match) {
      case true:
        return 'True'
      case false:
        return 'False'
      default:
        return 'Not sure'
    };
  }

  async function runAnalyzer () {
    const response = await fetch('http://localhost:5000/classify/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({text: analyzeText})
    });

    const data = await response.json();

    console.log(data);
    // setPredictions(newPredictions);
  }

  return (
    <div>
      {/* <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/api/v1/authorize?client_id=lFL50Lb5PCEI-g&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/&duration=temporary&scope=identity%20history">
        <Button>Authenticate</Button>
      </a> */}
      <br />
      <Form>
        <Form.TextArea name="analyzeText" placeholder='Type something mean!' onChange={(e) => setAnalyzeText(e.target.value)} />
        <Button onClick={() => runAnalyzer()}>Analyze!</Button>
      </Form>
      {(predictions.length > 0) &&
      <Table celled>
        <Table.Header>
          <Table.Row>
            {tableHeaders.map(header => <Table.HeaderCell key={header}>{header}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {predictions.map(prediction => <Table.Cell key={prediction.label}>{parseResult(prediction.results[0].match)}</Table.Cell>)}
          </Table.Row>
        </Table.Body>
      </Table>
      }
    </div>
  )
}
