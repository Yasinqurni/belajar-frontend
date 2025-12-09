import Image from "next/image";

interface UserChatProps {
  name: string;
  msg: string;
}

export default function UserChat({ name, msg }: UserChatProps) {
  return (
    <div className="flex items-center p-2 h-20">
      {/* Avatar */}
      <Image
        src="/assets/image-1.png"
        alt=""
        width={64}
        height={64}
        className="rounded-full border-2 border-blue-500 p-1"
      />

      {/* Space */}
      <div className="w-1" />

      {/* Content */}
      <div className="flex flex-col flex-1 p-2">
        <span className="font-bold">{name}</span>
        <span>{msg}</span>

        {/* Icon end aligned */}
        <div className="self-end text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
