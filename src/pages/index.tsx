
import Todo from '../pages/components/Todo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
const Home = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <Todo />
  </QueryClientProvider>
    );
};

export default Home;
