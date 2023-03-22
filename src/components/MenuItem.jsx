import Link from "next/link";

export default function MenuItem({ title, adress, Icon }) {
  return (
    <div>
      <Link className="mx-4 lg:mx-6 hover:text-amber-400" href={adress}>
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
