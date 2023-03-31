import './Block.css';

function Block ({ value }) {
  return (
		<div className="block">
    <ul className="currencies">
      <li>RUB</li>
			<li>USD</li>
			<li>EUR</li>
			<li>GBR</li>
      <li>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <input
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
	)
};

export default Block