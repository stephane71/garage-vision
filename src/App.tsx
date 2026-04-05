import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Vehicle } from "./components/Vehicle";
import { MOCK_VEHICLES } from "./mock/data.ts";
import { Card } from "./ui/Card";

const queryClient = new QueryClient();

const APP_NAME = "Garage Vision";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-3xl p-4">
        <h1 className="mb-10 text-center text-2xl">{APP_NAME}</h1>
        <Card>
          <Vehicle vehicle={MOCK_VEHICLES[2]} />
        </Card>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
