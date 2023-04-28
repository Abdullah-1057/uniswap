import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x35691093e5255e16656c054D266d78408B89d7a7";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/l28QuEUv4S2E4y3x1xisO0AL0NQ6AwOn",
  },
};
