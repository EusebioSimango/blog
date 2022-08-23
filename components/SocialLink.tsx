interface SocialLinkProps {
	url: string,
	icon: any
}

export default function SocialLink({ url, icon }: SocialLinkProps){

	return (
		<a href={url} target={"_blank"} className="">
      <span className="text-gray-700 hover:text-gray-900 transition-all duration-700 cursor-pointer">
        {icon}
      </span>
    </a>
	)
}
