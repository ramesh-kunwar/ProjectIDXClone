import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping";

export default function usePing() {
  const { isLoading, isError, data, error } = useQuery({
    queryFn: pingApi, // function that needs to be called
    queryKey: "ping", // unique key for the query to be cached
    staleTime: 10000,
  });

  return { isLoading, isError, data, error };
}
