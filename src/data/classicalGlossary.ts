import type { GrammarRole } from '../types/grammar';
import type { GlossaryEntry } from '../i18n/strings';

/**
 * Plain-English definitions for grammar roles, written for
 * Classical Chinese (文言文) learners. Same keys as the modern
 * glossary but with classical examples and descriptions.
 */
export const classicalGlossary: Record<GrammarRole, GlossaryEntry> = {
    Sentence: {
        headline: 'The whole sentence',
        detail: 'The complete classical statement. Every other part in the tree lives inside here.',
        headlineZh: '完整句子',
        detailZh: '一个完整的文言表述。树中所有其他部分都包含在这个最外层的框架里。',
    },
    Topic: {
        headline: 'What the sentence is about',
        detail:
            'Classical Chinese, like modern Mandarin, is topic-prominent. The topic sets the scene before the comment delivers the point. For example, 千里之行 ("a journey of a thousand miles") in 千里之行，始於足下.',
        headlineZh: '话题',
        detailZh: '文言文和现代汉语一样是话题突出型语言。话题铺设场景，评论传达要点。如"千里之行，始於足下"中的"千里之行"。',
    },
    Comment: {
        headline: 'What is said about the topic',
        detail:
            'The assertion or judgment made about the topic. In 學而時習之，不亦說乎, the comment 不亦說乎 delivers the rhetorical punch.',
        headlineZh: '评论',
        detailZh: '对话题做出的断言或判断。如"學而時習之，不亦說乎"中，评论"不亦說乎"传递了反问的力度。',
    },
    Subject: {
        headline: 'Who does the action',
        detail:
            'The agent of the verb. Often the same as the topic, but in classical Chinese the subject is frequently omitted (dropped) when recoverable from context.',
        headlineZh: '主语',
        detailZh: '动作的执行者。通常和话题一致，但文言文中主语经常在上下文可推知时省略。',
    },
    Predicate: {
        headline: 'The action or description',
        detail:
            'Everything said about the subject: the verb, its object, and any modifiers. Classical predicates are often strikingly compact. A single character can carry the full predicate.',
        headlineZh: '谓语',
        detailZh: '关于主语的全部描述：动词、宾语和修饰语。文言谓语往往极为精练，一个字就能承载全部谓语信息。',
    },
    'Verb Phrase': {
        headline: 'A verb and its dependents',
        detail:
            'A group of words built around a verb, including its object, coverb phrases, and complements. In classical texts, serial verb chains can produce multi-verb VPs: for example, 謂安陵君曰 in cc33 chains "say to Lord Anling" + "spoke thus" inside a single VP governed by the causative 使.',
        headlineZh: '动词短语',
        detailZh: '以动词为核心组建的一组词，包括宾语、介词短语和补语。文言中连动结构可以产生多动词的VP，如cc33中"謂安陵君曰"将"对安陵君说"+"曰"串联在使役动词使的VP里。',
    },
    'Noun Phrase': {
        headline: 'A noun and its modifiers',
        detail:
            'A group of words built around a noun. In classical Chinese, modifiers precede the head noun, often linked by 之. For example, 千里之行 ("a thousand miles\' journey").',
        headlineZh: '名词短语',
        detailZh: '以名词为核心组建的一组词。文言中修饰语放在中心词前面，常用"之"连接。如"千里之行"（千里的路程）。',
    },
    Verb: {
        headline: 'The action or state word',
        detail:
            'The core word expressing what happens. Classical verbs are highly flexible: the same character often serves as verb, noun, or adjective depending on position.',
        headlineZh: '动词',
        detailZh: '表达动作或状态的核心字。文言动词非常灵活：同一个字根据位置不同，可以充当动词、名词或形容词。',
    },
    Object: {
        headline: 'What receives the action',
        detail:
            'The thing the verb acts on. In classical Chinese, pronouns like 之 ("it/him") often serve as objects. For example, 知之 ("know it").',
        headlineZh: '宾语',
        detailZh: '动词作用的对象。文言中常用代词"之"（它/他）做宾语，如"知之"（知道它）。',
    },
    Adjunct: {
        headline: 'Pre-verbal modifier',
        detail:
            'Anything that modifies the verb from before: negation (不, 非, 勿), certainty (必), time (日), frequency (三), or rhetorical intensifiers (亦). Classical adjuncts tend to be single characters.',
        headlineZh: '状语',
        detailZh: '动词前面的修饰成分：否定（不、非、勿）、确定（必）、时间（日）、频率（三）或语气加强（亦）。文言状语通常是单字。',
    },
    Preposition: {
        headline: 'A linking word showing relationship',
        detail:
            'Linking words (often called "coverbs") like 於 (at/from/than), 以 (by means of/with), and 自 (from) that mark the relationship between a verb and a noun. These are the ancestors of modern 在, 从, 用.',
        headlineZh: '介词',
        detailZh: '表示关系的连接词（也叫"介词"），如於（在/从/比）、以（用/凭借）、自（从）。它们是现代汉语在、从、用的前身。',
    },
    Particle: {
        headline: 'A grammatical function word',
        detail:
            'Small words with purely grammatical roles: 者 (turns verbs into nouns like "the one who"), 所 (marks "that which is done"), 乎 (question marker), 矣 (conclusion), 焉 (fused location word), 而 (connective), 之 (possession marker/pronoun).',
        headlineZh: '虚词',
        detailZh: '纯粹承载语法功能的小词：者（将动词变为名词"……的人"）、所（标记"所做的事"）、乎（疑问标记）、矣（判断收束）、焉（融合方位词）、而（连词）、之（领属标记/代词）。',
    },
    Adjective: {
        headline: 'A describing word',
        detail:
            'Describes a quality. In classical Chinese, adjectives freely function as nouns (故 = "the old", 新 = "the new") or predicates (說/悅 = "joyful") without changing their written form.',
        headlineZh: '形容词',
        detailZh: '描述性质的词。在文言中，形容词可以自由充当名词（故="旧的东西"，新="新的东西"）或谓语（說/悅="快乐"），词形不变。',
    },
    Noun: {
        headline: 'A person, place, or thing',
        detail:
            'The name of something. Classical nouns can also function as verbs or adverbs based on context. For example, 日 ("day") can be used as "daily."',
        headlineZh: '名词',
        detailZh: '事物的名称。文言名词也可以根据语境充当动词或副词，如"日"（白天）可以用作"每天"。',
    },
    Pronoun: {
        headline: 'A stand-in for a noun',
        detail:
            'Words like 吾 (I, archaic), 己 (oneself), 之 (it/him/them), 我 (I/me). Classical Chinese has more pronoun distinctions than modern Mandarin.',
        headlineZh: '代词',
        detailZh: '代替名词的词，如吾（我，古语）、己（自己）、之（它/他/他们）、我（我）。文言比现代汉语有更多的代词区分。',
    },
    Attributive: {
        headline: 'A word or phrase modifying a noun',
        detail:
            'Descriptors that come BEFORE the head noun, often linked by 之 (similar to modern 的). E.g. 常 ("constant") in 常道 ("the constant Way").',
        headlineZh: '定语',
        detailZh: '放在中心词之前的修饰成分，常用"之"连接（类似现代的"的"）。如"常道"中的"常"（恒常的）。',
    },
    Complement: {
        headline: 'Extra info completing a verb',
        detail:
            'Post-verbal information, less common in classical Chinese than in modern Mandarin. When present, it often indicates result or potential (e.g. 可道 = "can be spoken").',
        headlineZh: '补语',
        detailZh: '动词后面的补充信息。在文言中比现代汉语少见。出现时通常表示结果或可能性（如可道="可以言说"）。',
    },
    'Head Noun': {
        headline: 'The main noun in a noun phrase',
        detail:
            'The core noun that all modifiers point to. For example, 道 ("the Way") in 常道, or 師 ("teacher") in 我師.',
        headlineZh: '核心名词',
        detailZh: '名词短语的核心名词，所有修饰语都指向它。如"常道"中的"道"，"我師"中的"師"。',
    },
    'Head Verb': {
        headline: 'The main verb in a verb phrase',
        detail:
            'The core verb around which objects, coverb phrases, and particles are grouped. Classical Head Verbs are flexible: 使 in cc33 is a causative ("cause/send"), 為 in cc41 opens a passive frame ("underwent"), and 興/亡 in cc43 are intransitive verbs used causatively ("cause to prosper / cause to perish").',
        headlineZh: '核心动词',
        detailZh: '动词短语的核心动词，宾语、介词短语和虚词围绕它组织。文言核心动词用法灵活：cc33中"使"是使役动词（派遣），cc41中"為"开启被动结构（遭受），cc43中"興/亡"是不及物动词的使动用法（使兴盛/使灭亡）。',
    },
    'Measure Word': {
        headline: 'A counting or classifying word',
        detail:
            'Rare in classical Chinese. The measure-word system developed mainly in later periods; classical texts often place numbers directly before nouns (三人 = "three people").',
        headlineZh: '量词',
        detailZh: '在文言中很少见。量词体系主要在后世发展起来；文言通常把数字直接放在名词前（三人="三个人"）。',
    },
    'Verb Morpheme': {
        headline: 'The verb half of a compound',
        detail:
            'Separable verbs (离合词) are a modern Mandarin phenomenon. In classical Chinese, this role is uncommon.',
        headlineZh: '离合词动词部分',
        detailZh: '离合词是现代汉语的现象。在文言中这一角色不常见。',
    },
    'Object Morpheme': {
        headline: 'The object half of a compound',
        detail:
            'The noun half of a separable verb. Like Verb Morpheme, this is primarily a modern construct.',
        headlineZh: '离合词宾语部分',
        detailZh: '离合词的名词部分。和离合词动词部分一样，这主要是现代汉语的构造。',
    },
    Pivot: {
        headline: 'A noun playing two roles at once',
        detail:
            'In a pivotal construction, one noun is simultaneously the object of the first verb and the subject of the second. This pattern exists in both classical and modern Chinese.',
        headlineZh: '兼语',
        detailZh: '在兼语句中，一个名词同时充当前一个动词的宾语和后一个动词的主语。这种句式在文言和现代汉语中都存在。',
    },
    Copula: {
        headline: 'The linking verb "to be"',
        detail:
            'In classical Chinese, the linking word "is" or "are" is often absent. 非 (fēi) means "is not", while saying "A is B" is often done by just placing them side by side, or with 為 (wéi).',
        headlineZh: '系动词',
        detailZh: '文言中常省略系词"是"。"非"表示"不是"，而"A是B"的表达往往直接并列、或用"為"。',
    },
    'Parallel Sentence': {
        headline: 'Side-by-side independent statements',
        detail:
            'Very common in classical syntax. A compound sentence where two or more independent clauses are placed neatly side-by-side to compare or contrast. For example, cc39\'s triple parallel 民為貴，社稷次之，君為輕 creates a mirror-image tree, and cc43\'s antithetical pair 憂勞可以興國，逸豫可以亡身 contrasts opposite outcomes in identical clause structures.',
        headlineZh: '并列句',
        detailZh: '在文言中非常常见。两个或以上独立分句整齐并排，形成对比或对照。如cc39的三重并列"民為貴，社稷次之，君為輕"形成镜像树结构，cc43的对仗"憂勞可以興國，逸豫可以亡身"用相同句式对比相反的结果。',
    },
    'Embedded Clause': {
        headline: 'A sentence hiding inside a sentence',
        detail:
            'A fully-formed mini-sentence that is nested inside a larger structure. In cc41 (信為人所笑), the entire 人所笑 ("people laughing at [him]") is an Embedded Clause inside the passive 為 frame. In cc33, the clause 謂安陵君曰 nests inside the causative 使. These embedded clauses are where classical Chinese hides its deepest structures.',
        headlineZh: '嵌套从句',
        detailZh: '嵌套在更大结构内部的完整小句子。cc41"信為人所笑"中，"人所笑"（人们嘲笑他）是嵌套在被动"為"框架内的从句。cc33中"謂安陵君曰"嵌套在使役动词"使"之下。这些嵌套从句正是文言文隐藏最深层结构的地方。',
    },
};
