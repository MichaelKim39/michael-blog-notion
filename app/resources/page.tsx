import { ResourcesHeader } from "features/resources/components/ResourcesHeader";
import { serverSideCmsClient } from "api/services/cms/cms.client";
import { isLearningResource } from "types/guards";
import { ResourceList } from "features/resources/components/ResourceList";

export default async function Resources() {
  const resources = await serverSideCmsClient.getDatabaseEntries(
    process.env.RESOURCES_DB_ID,
    isLearningResource
  );

  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <ResourceList data={resources} />
    </div>
  );
}
