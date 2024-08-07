import {QueryClient} from "@tanstack/react-query";



export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60000,
            gcTime: 900000,
            refetchOnWindowFocus: false
        }
    },
})