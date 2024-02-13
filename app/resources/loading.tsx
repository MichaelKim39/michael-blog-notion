import { ResourcesLinkCardSkeleton } from "features/resources/components/ResourcesLinkCardSkeleton";
import { ResourcesHeader } from "features/resources/components/ResourcesHeader";
import { ResourceList } from "features/resources/components/ResourceList";

export default function ResourcesLoading() {
  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <ResourceList data={[]} />
      <div className="my-4">
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
      </div>
    </div>
  );
}
