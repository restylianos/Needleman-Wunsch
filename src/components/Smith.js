import React from 'react';
const SWaligner = require('graphic-smith-waterman');

const Smith = ({ first_sequence, second_sequence, gap, sub, match, miss }) => {
  const defaultAligner = SWaligner({
    similarityScoreFunction: (a, b) => (a === b ? match : sub),
    gapScoreFunction: (number) => number * gap,
  });
  const defaultResult = defaultAligner.align(first_sequence, second_sequence);
  const res_sequences = defaultResult.alignedSequences;

  // console.log(defaultResult.alignment);
  // console.log(defaultResult.originalSequences);
  // console.log(defaultResult.score);
  // console.log(defaultResult.tracebackMatrix);

  const res_matrix = defaultResult.scoringMatrix;

  const final_seq_1 =
    first_sequence.substring(0, 0) + ' ' + first_sequence.substring(0, first_sequence.length);
  const final_seq_2 =
    second_sequence.substring(0, 0) + '  ' + second_sequence.substring(0, second_sequence.length);

  const renderedTtitles_y = [...final_seq_1].map((amino, aminoIndex) => {
    //console.log(amino);
    return <th key={aminoIndex + 20}>{amino}</th>;
  });

  const renderedResults = res_matrix.map((row, index) => {
    const res = row.map((item, secondIndex) => {
      return <td key={secondIndex}>{item}</td>;
    });
    return (
      <tr key={index}>
        <th>{renderedTtitles_y[index].props.children}</th>
        {res}
      </tr>
    );
  });

  const renderedTitles_x = [...final_seq_2].map((amino, index) => {
    return (
      <th key={index}>
        <abbr title="Position">{amino}</abbr>
      </th>
    );
  });

  return (
    <section className="section">
      <h3 className="title is-3 has-text-centered">Smith-Waterman</h3>
      <div className="column">
        <div className="table-container">
          <table
            className="table is-bordered is-hoverable"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            <thead>
              <tr>{renderedTitles_x}</tr>
            </thead>
            <tbody>{renderedResults}</tbody>
          </table>
        </div>
      </div>

      <div className="has-text-centered">
        <h4 className="has-text-centered title is-4">Alignment</h4>
        <h5 className="title is-5 has-text-centered">{res_sequences[0]}</h5>
        <h5 className="title is-5 has-text-centered">{res_sequences[1]}</h5>
      </div>
    </section>
  );
};

export default Smith;
