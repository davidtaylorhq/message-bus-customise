import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  const messageBus = api.container.lookup("service:message-bus");
  messageBus.firstChunkTimeout = settings.first_chunk_timeout_ms;
});
