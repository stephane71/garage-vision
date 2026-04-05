import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Vehicle } from "./components/Vehicle";
import { MOCK_VEHICLES } from "./mock/data.ts";

const queryClient = new QueryClient();

const APP_NAME = "Garage Vision";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-3xl p-4">
        <h1 className="text-center text-2xl">{APP_NAME}</h1>
        <Vehicle vehicle={MOCK_VEHICLES[2]} />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
