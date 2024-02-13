import { serverSideCmsClient } from "api/services/cms/cms.client";
import { JournalEntryList } from "features/journal/components/JournalEntryList";
import { JournalHeader } from "features/journal/components/JournalHeader";
import { isJournalEntry } from "types/guards";

export default async function Journal() {
  const journalEntries = await serverSideCmsClient.getDatabaseEntries(
    process.env.JOURNAL_DB_ID,
    isJournalEntry
  );

  return (
    <div className="flex flex-col px-8">
      <JournalHeader />
      <JournalEntryList data={journalEntries} />
    </div>
  );
}
