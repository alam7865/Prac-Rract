const Shimmer = () => {
  return (
    <div className="resturent_list">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer_card"></div>
        ))}
    </div>
  );
};

// const Shimmer = () => {
//   return <h1>HI🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏</h1>;
// };

export default Shimmer;
