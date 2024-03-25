

  // const [username, setUsername] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   // clicks = clicks + 1;
  //   setClicks(clicks + 1);
  // };

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

{/* <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>} */}

  // const resetFeedback = () => {
  //   setValues({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  //   })
  // }

const onLeaveFeedback = (option) => {
	setValues({
		...values,
		[option]: values[option] + 1
	});
};

{totalFeedback > 0 ? <Feedback/> : <Notification/>}

const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(localStorage.getItem("feedback"));
    if (savedClicks === null) {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
    return savedClicks;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);