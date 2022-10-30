import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <div className="w-full rounded-[10px] bg-profile-500 shadow-sm py-8 px-10">
      <div className="flex gap-8">
        <div className="min-w-[148px] min-h-[148px] bg-slate-500 rounded-lg"></div>
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl text-title-500">
                Wellington Rodrigues
              </h1>
              <a
                href="#"
                className="uppercase text-blue-500 font-bold text-xs flex gap-2 items-center"
              >
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <p className="text-base text-text-500 mt-2">
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>
          <footer className="flex gap-6 items-center">
            <p className="text-base text-subtitle-500 flex gap-2 items-center">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              wellingtonrodriguesbr
            </p>
            <p className="text-base text-subtitle-500 flex gap-2 items-center">
              <FontAwesomeIcon icon={faBuilding} />
              Gonew.co
            </p>
            <p className="text-base text-subtitle-500 flex gap-2 items-center">
              <FontAwesomeIcon icon={faUserGroup} />
              72 seguidores
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
