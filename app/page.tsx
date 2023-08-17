import TopicList from "@/components/TopicList";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
        <TopicList />
         
    </main>
  )
}
