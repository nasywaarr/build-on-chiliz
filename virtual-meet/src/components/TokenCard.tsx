interface TokenCardProps {
  symbol: string;
  balance: string;
  address: string;
  logo?: string;
}

const TokenCard = ({ symbol, balance, address, logo }: TokenCardProps) => {
  return (
    <div className="border rounded-lg p-4 m-2 flex items-center gap-4">
      {logo && <img src={logo} alt={symbol} className="w-10 h-10 rounded-full" />}
      <div>
        <p className="font-bold">{symbol}</p>
        <p className="text-sm text-gray-500">{address}</p>
        <p>Balance: {balance}</p>
      </div>
    </div>
  );
};

export default TokenCard;