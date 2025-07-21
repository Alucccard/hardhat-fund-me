import fs from "fs";
import path from "path";

// 获取当前网络的名称
const networkName = "chain-1337"; // 或者其他网络名称，如 'rinkeby', 'mainnet' 等

// 构建 deployed-addresses.json 文件的路径
const deployedAddressesPath = path.join(
  "ignition",
  "deployments",
  networkName,
  "deployed_addresses.json"
);

// 读取文件
const data = fs.readFileSync(deployedAddressesPath, "utf8");

try {
  // 解析 JSON 数据
  const deployedAddresses = JSON.parse(data);

  // 使用 deployedAddresses 对象
  console.log(deployedAddresses.value);
} catch (err) {
  console.error("Error:", err);
}
