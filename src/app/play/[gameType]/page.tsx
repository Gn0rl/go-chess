import { Play } from "@/widgets/Play"
export default function page({ params }: { params: { gameType: string } }) {
    Promise.resolve(params).then((res) => console.log(res))

    if (!params.gameType) return <div>No game type</div>

    return <Play gameType={params.gameType} />
}
