import { basicTopicComment } from './basic_topic_comment';
import { baConstruction } from './ba_construction';
import { beiPassive } from './bei_passive';
import { shDeConstruction } from './sh_de_construction';
import { comparatives } from './comparatives';
import { rhetoricalQuestions } from './rhetorical_questions';
import { separableVerbs } from './separable_verbs';
import { resultativeComplements } from './resultative_complements';
import { serialVerbConstructions } from './serial_verb_constructions';
import { discourseContext } from './discourse_context';
import { doubleTopic } from './double_topic';
import { pivotalConstructions } from './pivotal_constructions';
import { potentialComplements } from './potential_complements';
import { degreeComplements } from './degree_complements';
import { directionalComplements } from './directional_complements';
import { correlativePatterns } from './correlative_patterns';
import { aspectMarkers } from './aspect_markers';
import { conditionalSentences } from './conditional_sentences';
import { even } from './even';

import type { SentenceData } from '../../types/grammar';

export const sampleSentences: SentenceData[] = [
    ...basicTopicComment,
    ...baConstruction,
    ...beiPassive,
    ...shDeConstruction,
    ...comparatives,
    ...rhetoricalQuestions,
    ...separableVerbs,
    ...resultativeComplements,
    ...serialVerbConstructions,
    ...discourseContext,
    ...doubleTopic,
    ...pivotalConstructions,
    ...potentialComplements,
    ...degreeComplements,
    ...directionalComplements,
    ...correlativePatterns,
    ...aspectMarkers,
    ...conditionalSentences,
    ...even
];
