import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <ul>
        <li>
          <Link href="/users" className="text-blue-400">
            Users
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="text-blue-400">
            About us
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-blue-400">
            Dashboard
          </Link>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias
        sit ex perspiciatis illum magnam suscipit minus modi, veritatis animi
        maiores ab deleniti facilis saepe, possimus at quo! Dolorem, unde! Sunt
        suscipit excepturi, sed officiis veritatis architecto sint maiores
        dolore, totam delectus veniam reprehenderit molestiae eum minus magni
        numquam iusto eveniet odit assumenda labore eaque, temporibus rerum
        dicta. Magnam, obcaecati. Laudantium dolorem voluptatum iusto
        consectetur minus iure illum repellat molestias ducimus soluta velit
        alias, aliquid cumque vitae tenetur sed at facere. Blanditiis, ea totam?
        Facilis quidem hic fugiat quis aspernatur.
      </p>
    </div>
  );
};

export default Home;
