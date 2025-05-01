export default function Result({ data }) {
  return (
    <section id="result">
      <table>
        <thead>
            <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Annual Investment</th>
            <th>Value End of Year</th>
            </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.interest}</td>
              <td>{item.annualInvestment}</td>
              <td>{item.valueEndOfYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}