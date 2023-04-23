import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface Profile {
  html_url: string;
  avatar_url: string;
  company: string;
  name: string;
  bio: string;
  followers: number;
  login: number;
}

export function Profile() {
  const [data, setData] = useState<Profile>({} as Profile);

  useEffect(() => {
    fetch("https://api.github.com/users/wellingtonrodriguesbr")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full rounded-[10px] bg-profile-500 shadow-sm py-8 px-10">
      <div className="flex gap-8">
        <div className="max-w-[148px] max-h-[148px] bg-slate-500 rounded-lg overflow-hidden">
          <img className="w-full h-full" src={data.avatar_url} alt="" />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl text-title-500">{data.name}</h1>
              <a
                href={data.html_url}
                target="_blank"
                className="uppercase text-blue-500 font-bold text-xs flex gap-2 items-center"
              >
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <p className="text-base text-text-500 mt-2">{data.bio}</p>
          </div>
          <footer className="flex gap-6 items-center">
            <p className="text-base text-subtitle-500 flex gap-2 items-center">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              {data.login}
            </p>
            <p className="text-base text-subtitle-500 flex gap-2 items-center">
              <FontAwesomeIcon icon={faBuilding} />
              {data.company}
            </p>
            <p className="text-base text-subtitle-500 flex gap-2 items-center">
              <FontAwesomeIcon icon={faUserGroup} />
              {data.followers} seguidores
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
