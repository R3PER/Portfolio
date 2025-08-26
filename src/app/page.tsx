import { FullScreen } from "@/components/full-screen"
import { MyUniverse } from "@/containers/my-universe"
import { PersonalInterests } from "@/containers/personal-interests"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <FullScreen className="w-full max-w-6xl mx-auto">
        <MyUniverse />
      </FullScreen>

      <div className="my-10 max-w-6xl mx-auto">
        <PersonalInterests />
      </div>

      {/* <Resume /> */}
    </div>
  )
}
