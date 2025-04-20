const Typing = () => {
  return (
    <div className="typing">
      {[1, 2, 3].map((item) => (
        <div key={item} className="dot"></div>
      ))}
    </div>
  );
};

export default Typing;
