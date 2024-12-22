import usePing from "../../hooks/apis/queries/usePing";

const PingComponent = () => {
  const { isLoading, data } = usePing();
  console.log(data, " data");
  console.log(isLoading, " is loading");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      hello
      {data?.message}
    </div>
  );
};

export default PingComponent;
