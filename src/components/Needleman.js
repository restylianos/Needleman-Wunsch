import React from 'react';

const Needleman = ({ first_sequence, second_sequence, gap, sub, match, miss }) => {
  console.log(first_sequence, second_sequence, gap, match);

  const seq1 = first_sequence;
  const seq2 = second_sequence;
  gap = -8;
  sub = -3;
  match = 15;

  var m = seq1.length;
  var n = seq2.length;

  // array creation

  var arr = [[]];

  for (let j = 0; j <= n; j++) arr[0][j] = j * gap;

  for (let i = 1; i <= m; i++) {
    arr[i] = [i * gap];

    for (let j = 1; j <= n; j++)
      arr[i][j] = Math.max(
        arr[i - 1][j] + gap,
        arr[i][j - 1] + gap,
        arr[i - 1][j - 1] + (seq1[i - 1] === seq2[j - 1] ? match : sub)
      );
  }

  // backtracking

  let out1 = '';
  let out2 = '';

  while (m > 0 && n > 0) {
    if (arr[m][n] === arr[m - 1][n] + gap) {
      m--;
      out1 = seq1[m] + out1;
      out2 = '-' + out2;
    } else if (arr[m][n] === arr[m][n - 1] + gap) {
      n--;
      out1 = '-' + out1;
      out2 = seq2[n] + out2;
    } else {
      m--;
      n--;
      out1 = seq1[m] + out1;
      out2 = seq2[n] + out2;
    }
  }

  out1 = seq1.slice(0, m) + new Array(n + 1).join('-') + out1;
  out2 = seq2.slice(0, n) + new Array(m + 1).join('-') + out2;

  // the (messy) drawing part begins here
  const res_1 = out1;
  const res_2 = out2;

  const final_seq_1 = seq1.substring(0, 0) + ' ' + seq1.substring(0, seq1.length);
  const final_seq_2 = seq2.substring(0, 0) + ' ' + seq2.substring(0, seq2.length);
  //fix arrays
  const renderedTitles_x = [...final_seq_2].map((amino, index) => {
    return (
      <th key={index}>
        <abbr title="Position">{amino}</abbr>
      </th>
    );
  });
  console.log(final_seq_1);

  const renderedResults = arr.map((row, index) => {
    const res = row.map((item, secondIndex) => {
      return <td key={secondIndex}>{item}</td>;
    });
    // const renderedTtitles_y = [...final_seq_1].map((amino, aminoIndex) => {
    //   console.log(amino);
    //   return <th key={aminoIndex + 20}>{amino}</th>;
    // });
    return (
      <tr key={index}>
        {/* {renderedTtitles_y} */}
        {res}
      </tr>
    );
  });

  return (
    <div className="section">
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
        <h4 className="title is-4">Alignment</h4>
        <h5 className="title is-5">{res_1}</h5>
        <h5 className="title is-5">{res_2}</h5>
      </div>
    </div>
  );
};

export default Needleman;
