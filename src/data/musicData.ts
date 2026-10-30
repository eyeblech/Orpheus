import { MUSIC_ERAS } from './eras';
import { MILESTONES_PART_1 } from './milestonesPart1';
import { MILESTONES_PART_2 } from './milestonesPart2';
import { MILESTONES_CULT_AND_WORLD } from './milestonesCultAndWorld';
import { MILESTONES_GREATEST_ALBUMS } from './milestonesGreatestAlbums';
import { MUSIC_MOVEMENTS, LIVE_CONCERT_MOMENTS } from './movementsAndConcertsData';
import { MUSIC_ICONS } from './iconsData';
import { MusicMilestone } from './types';

const seenIds = new Set<string>();
const seenTitles = new Set<string>();

export const MUSIC_MILESTONES: MusicMilestone[] = [
  ...MILESTONES_PART_1,
  ...MILESTONES_PART_2,
  ...MILESTONES_CULT_AND_WORLD,
  ...MILESTONES_GREATEST_ALBUMS,
]
  .filter((work) => {
    const normalizedTitle = work.title.toLowerCase().trim();
    if (seenIds.has(work.id) || seenTitles.has(normalizedTitle)) {
      return false;
    }
    seenIds.add(work.id);
    seenTitles.add(normalizedTitle);
    return true;
  })
  .sort((a, b) => a.year - b.year);

export {
  MUSIC_ERAS,
  MUSIC_MOVEMENTS,
  LIVE_CONCERT_MOMENTS,
  MUSIC_ICONS,
};
export * from './types';
