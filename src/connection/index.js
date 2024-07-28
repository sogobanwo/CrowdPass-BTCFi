import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN = 1115;

export const Core_Dao = 1115;

const CoreDao = {
  chainId: Core_Dao,
  name: "Core Blockchain Testnet",
  currency: "tCORE",
  explorerUrl: "https://scan.test.btcs.network",
  rpcUrl:  import.meta.env.VITE_RPC_URL,
};

const metadata = {
  name: "CrowdPass",
  description:  `CrowdPass`,
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

export const configureWeb3Modal = () =>
    createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [CoreDao],
        projectId: import.meta.env.VITE_Project_Id,
        enableAnalytics: false, // Optional - defaults to your Cloud configuration
    });

// import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// export const SUPPORTED_CHAIN = 4202;

// export const SEPOLIA_ID = 4202;

// const LiskSepolia = {
//   chainId: SEPOLIA_ID,
//   name: "Lisk sepolia",
//   currency: "ETH",
//   explorerUrl: "https://scan.test.btcs.network",
//   rpcUrl: import.meta.env.VITE_RPC_URL,
// };

// const metadata = {
//   name: "HostIT",
//   description: `HostIT`,
//   url: "https://mywebsite.com", // origin must match your domain & subdomain
//   icons: ["https://avatars.mywebsite.com/"],
// };

// export const configureWeb3Modal = () =>
//   createWeb3Modal({
//     ethersConfig: defaultConfig({ metadata }),
//     chains: [LiskSepolia],
//     projectId: import.meta.env.VITE_Project_Id,
//     enableAnalytics: false, // Optional - defaults to your Cloud configuration
//   });
