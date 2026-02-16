---
title: "Denazification in the Local Press: Computational Analysis of Historical Memory Narratives in West German Newspapers, 1945–1977"
description: "How did West German society narrate and negotiate the Nazi past in everyday media?"
abstract: "How did West German society narrate and negotiate the Nazi past in everyday media? While scholarship on Vergangenheitsbewältigung has largely relied on national elite newspapers, local newspapers—deeply embedded in the communities where perpetrators, bystanders, and survivors lived side by side—remain underexamined. Leveraging a large-scale digitized newspaper archive from the Deutsche Digitale Bibliothek (DDB), this study constructs a 1945–1977 denazification and historical-memory sub-corpus and applies a mixed computational toolkit: (1) time-series analysis of issue attention, (2) topic modeling to identify dominant narrative frames, and (3) diachronic word embeddings to trace semantic drift in core concepts (e.g., Schuld, Opfer). A comparative analysis of German-language exile newspapers (notably Aufbau) shows that the 1950s ‘silence’ was not universal: exile discourse remained oriented toward responsibility, persecution, and restitution, whereas domestic local press increasingly translated moral reckoning into administrative and legal routines. The findings contribute both to memory studies—by highlighting local press as a negotiation arena between communicative and cultural memory—and to computational historical media analysis by demonstrating robust strategies for noisy OCR corpora."
date: 2026-02-16
tags: ["denazification", "vergangenheitsbewältigung", "collective-memory", "framing", "local-newspapers", "topic-modeling", "diachronic-word-embeddings"]
pdfUrl: "/pdfs/denazification-local-press-1945-1977.docx"
draft: false
---

# 1. Introduction

In 1946, Allied occupation authorities distributed more than 13 million denazification questionnaires in the western zones of Germany. This unprecedented political screening required adult Germans to provide written accounts of their relationship to the Nazi regime and reached into nearly every household. Yet by the early 1950s the largest political cleansing in modern history had largely ended: a sequence of amnesty laws and reintegration measures enabled most former Nazis—often classified as Belastete or Mitläufer—to return to public life, while public debate over guilt and responsibility narrowed sharply (Frei, 1996). The 1960s reopened the question through a new wave of trials, notably the Eichmann trial (1961) and the Frankfurt Auschwitz trial (1963–1965). How did this shift from confrontation to silence, and from silence to renewed engagement, register in the everyday media that ordinary readers consumed?

Research on postwar German memory politics has produced a rich literature (e.g., Frei, 1996; Reichel, 2001; Kansteiner, 2006; Assmann, 2006). However, media-centered studies have overwhelmingly focused on national elite newspapers (e.g., Frankfurter Allgemeine Zeitung, Die Zeit, Der Spiegel) and on parliamentary and government discourse. Local newspapers—arguably the most habitual medium for West German citizens for decades—have rarely been studied systematically. This gap is partly infrastructural: large-scale digitization of local newspapers is a comparatively recent development (Bingham, 2010; Nicholson, 2013). At the same time, computational approaches to German-language media have largely targeted contemporary corpora, leaving Cold War–era German press underexplored.

This study addresses both gaps. Using approximately 250,000 pages of digitized West German local newspapers (1945–1977) from the Deutsche Digitale Bibliothek (DDB), we combine three complementary computational approaches—time-series analysis, LDA topic modeling, and FastText-based semantic drift analysis—to track the evolution of denazification and historical-memory discourse. We further introduce German-language exile newspapers (primarily Aufbau, published in New York) as a comparative lens to examine how different social positions produced divergent narratives of the same past.

## The analysis is organized around four research questions:


1. How did the volume and salience of denazification-related coverage in West German local newspapers change over time, and which historical events coincide with major turning points?
2. Which dominant narrative frames emerged in local-press coverage, and how did these frames evolve across four analytical periods?
3. How did the meanings of core concepts—such as Schuld (guilt), Opfer (victim), Widerstand (resistance), and Faschismus (fascism)—shift between 1945 and 1977?
4. How did exile newspapers frame denazification and historical memory differently from domestic West German local newspapers during the overlapping window 1945–1950?

# 2. Literature Review

This study sits at the intersection of three bodies of scholarship: (1) research on denazification and historical memory in postwar Germany, (2) media and collective-memory theory, and (3) computational historical media analysis.

## 2.1 Denazification and Memory Politics in Postwar Germany

A widely cited narrative arc describes West German engagement with the Nazi past as moving from Allied-led confrontation to domestic silence, followed by renewed reckoning and eventual institutionalization. During the occupation (1945–1949), the International Military Tribunal at Nuremberg prosecuted the Nazi leadership while denazification agencies attempted to classify millions of Germans into categories ranging from major offenders to exonerated persons (Frei, 1996). In the U.S. zone, the Spruchkammer system served as a core institutional mechanism. In parallel, Karl Jaspers’ Die Schuldfrage (1946) proposed an influential typology of criminal, political, moral, and metaphysical guilt that shaped philosophical debate.

After the founding of the Federal Republic in 1949, the momentum of confrontation weakened quickly. The Adenauer era (1949–1963) pursued amnesties and reintegration policies; Frei (1996) characterizes this strategy as Vergangenheitspolitik—an orientation that prioritized social stability at the cost of moral interrogation. Mitscherlich and Mitscherlich (1967) diagnosed this retreat as an ‘inability to mourn,’ while Giordano (1987) famously named the refusal to confront the past a ‘second guilt’ (die zweite Schuld).

A series of judicial events broke the postwar silence. The Eichmann trial (Jerusalem, 1961) re-centered Nazi crimes in global media attention; the Frankfurt Auschwitz trial (1963–1965) forced West German society to confront concrete details of camp violence (Weinke, 2006). The generational conflict of 1968 intensified the question of what the ‘fathers’ generation’ had done. From the 1970s onward, memory politics became increasingly institutionalized through commemorative practices, memorials, and the expansion of the restitution frame (Wolfrum, 1999; Reichel, 2001).

This arc primarily describes the Federal Republic. The German Democratic Republic followed a different trajectory, constructing an official ‘antifascist state’ narrative that externalized Nazism as a product of capitalism and claimed that socialism had resolved the problem (Herf, 1997). Because the available GDR data in our archive is limited, the empirical analysis focuses on West German local newspapers.

## 2.2 Media, Collective Memory, and Framing

Collective memory is not a natural residue of the past; it is continuously constructed and reconstructed through social interaction. Halbwachs (1925/1992) emphasized that individual recollection is embedded in social frameworks. Jan Assmann (1995) distinguished communicative memory—rooted in everyday exchange among witnesses and limited to roughly three generations—from cultural memory, which is stabilized and transmitted through institutional media such as texts, rituals, and monuments. Aleida Assmann (2008) further explored the transformation between history and memory and highlighted media’s mediating function.

Within this framework, newspapers—especially local newspapers—occupy a distinctive position. They serve as a channel through which elite discourse circulates into local communities and through which community attitudes are projected into broader publics. Studies of journalism and memory show how news selectively invokes and frames historical events to participate in memory-making (Edy, 1999; Zelizer, 1992).

Framing theory (Entman, 1993) provides a precise toolkit for analyzing how local newspapers construct historical memory. Frames select aspects of perceived reality and make them more salient, performing four functions: defining problems, diagnosing causes, making moral judgments, and suggesting remedies. This schema maps directly onto denazification discourse: from administrative classification of perpetrators to commemorative engagement with victims; from individual blame to systemic explanations. Agenda-setting theory (McCombs & Shaw, 1972) complements this by focusing on the dynamics of issue attention—what the media chooses to discuss and what it chooses to omit.

## 2.3 Computational Historical Media Analysis

Computational communication science has expanded rapidly, applying large-scale text analysis to political communication, public opinion, and social media (Grimmer & Stewart, 2013; van Atteveldt & Peng, 2018). Historical newspaper corpora pose distinct challenges: OCR noise, historical orthographic variation, page-level rather than article-level granularity, and the morphological complexity of German compounds (Traub et al., 2015).

Methodologically, prior work has established the viability of topic models in historical press analysis (Newman & Block, 2006) and developed frameworks for detecting semantic change using diachronic word embeddings aligned via Procrustes rotation (Hamilton et al., 2016; Schönemann, 1966; Kulkarni et al., 2015). Yet, to our knowledge, no study has combined time-series analysis, topic modeling, and semantic-drift analysis to examine denazification discourse at scale in German historical newspapers. This study brings a computational ‘toolkit’ to a classic topic in memory studies while using framing and media theory as a bridge between measurement and interpretation.

# 3. Data and Methods

## 3.1 Data Source

The primary data source is the historical newspaper archive of the Deutsche Digitale Bibliothek (DDB), Germany’s largest digital aggregator of cultural-heritage collections. DDB provides scanned newspaper pages with full text extracted via optical character recognition (OCR). The raw dataset used in this project covers 291,967 page-level records spanning 1945–1989. Importantly, DDB’s unit of analysis is the page, not the individual article: a single page can contain multiple unrelated items. This granularity requires cautious keyword-based sampling strategies to control false positives.

## 3.2 Data Processing

Data processing proceeded in four sequential steps, each with explicit inclusion and exclusion criteria.

Step 1 (classification by publication place). Newspapers were classified into the Federal Republic (BRD), the German Democratic Republic (DDR), or exile publications (EXILE) based on place of publication. We built a lookup table mapping city names to occupation zones (1945–1949) and the later two German states. Berlin titles were coded by the political affiliation of the publishing institution given the city’s divided status. German-language newspapers published abroad (e.g., New York, Buenos Aires, Shanghai, Montevideo) were coded as exile publications. The initial classification yielded BRD 235,794 pages; DDR 27,373 pages; EXILE 11,165 pages.

Step 2 (exclude non-newspaper publications). The raw archive contains many non-newspaper serials (e.g., church bulletins, medical journals, railway or factory bulletins, and occupation-authority gazettes). We excluded these by matching the publication title field. The largest exclusion was Der Motor, an internal publication of a Rostock diesel-engine factory (26,123 pages), which accounted for roughly 95% of DDR-coded records. After exclusion, the corpus sizes were BRD 235,794; EXILE 11,165; DDR 1,046 pages.

Step 3 (OCR-quality filtering). OCR noise can distort downstream analyses (Traub et al., 2015). We computed an OCR quality score for each page as the share of recognizable tokens (tokens composed of standard German characters) among all tokens. The median score was 0.96, indicating overall good quality. We used a conservative threshold of 0.60 to exclude only severely damaged pages, removing 108 pages (0.04%). The cleaned corpus contains 248,005 pages.

Step 4 (keyword-based denazification filtering). To extract pages related to denazification and historical memory, we constructed a list of 70 German keywords organized into six semantic categories: (1) denazification procedures (e.g., Entnazifizierung, Spruchkammer, Fragebogen, Mitläufer); (2) guilt and responsibility (e.g., Schuld, Verantwortung, Wiedergutmachung, Sühne); (3) trials and justice (e.g., Kriegsverbrecher, Nürnberger Prozess); (4) ideological framing (e.g., Faschismus, Nationalsozialismus, antifaschistisch); (5) victims and memory (e.g., Konzentrationslager, Verfolgung, Opfer, Gedenken); and (6) historical reckoning (e.g., Aufarbeitung, Vergangenheitsbewältigung).

Because page-level OCR text can yield many false positives, we applied a two-pass strategy. The first pass included any page matching at least one keyword (91,752 pages). The second pass required either (a) matches in two or more distinct semantic categories, or (b) three or more distinct keywords within the same category. The resulting denazification sub-corpus contains 32,439 pages: BRD 29,454; EXILE 2,237; DDR 748 (the DDR subset is too small for systematic comparison and is used only exploratorily).

A notable observation from the keyword-matching stage is that the term “Holocaust” appears only twice in the entire corpus, corroborating claims that it did not enter German public discourse before the 1979 U.S. TV miniseries Holocaust (Sznaider, 2001).

## 3.3 Analytical Strategy

We use four complementary analytical components to address the research questions. (1) Time-series analysis tracks yearly attention dynamics for BRD and EXILE and normalizes by total yearly output, using key historical events as interpretive anchors. (2) LDA topic modeling is applied to the BRD sub-corpus (29,454 pages) to identify dominant frames; text is lemmatized and POS-filtered using spaCy, stopwords are removed, and the topic count is selected via perplexity (k = 14). We prefer LDA to transformer-based topic models because bag-of-words methods are more robust to historical OCR noise and orthographic variation. (3) FastText embeddings are trained separately for four periods (1945–1949, 1950–1959, 1960–1969, 1970–1977), aligned via orthogonal Procrustes rotation, and analyzed using nearest-neighbor comparisons, Jaccard-based stability indices, and a directional-analysis design that reduces morphological noise from German compounds. (4) Exile-press comparison contrasts keyword-category distributions for BRD vs EXILE during 1945–1950, using normalized proportions.

# 4. Results

## 4.1 Attention Dynamics in the Local Press

Issue attention in West German local newspapers exhibits a clear four-stage trajectory that broadly aligns with established accounts of postwar memory politics while revealing a distinct local rhythm.

Stage 1—confrontation (1945–1952). Figure 1 shows rapid growth and a peak in denazification-related pages in the BRD corpus. The normalized series (Figure 2) highlights the scale: in 1945 roughly 40% of pages contain denazification-related keywords, rising to around 48% in 1947—almost every other page. This reflects the pervasive administrative reality of denazification: Nuremberg dominated headlines, Spruchkammer procedures directly affected local communities, and the Fragebogen reached millions of households.

Figure 1. Annual counts of denazification- and memory-related pages in the FRG (BRD) local-press corpus and in German-language exile newspapers (EXILE), 1945–1977.

Figure 2. Proportion of denazification- and memory-related pages in the FRG (BRD) local-press corpus by year (normalized by total yearly output), 1945–1977.

Figure 3. Keyword-category trends in the FRG (BRD) local-press corpus (stacked area).

Stage 2—silence (1953–1960). After 1953, attention drops sharply. The normalized proportion declines from about 13% in 1952 to around 9% by 1955 and remains at roughly 8–9% thereafter. This is not a random media cycle but corresponds to political reintegration and amnesty policies in the early Federal Republic. Laws such as the 1949 Straffreiheitsgesetz and the 1951 ‘Article 131’ law facilitated the return of former Nazi officials to public service (Frei, 1996). A Schlussstrich sentiment—‘drawing a line’ under the past—became socially dominant, and local press attention mirrors this collective retreat. Figure 3 shows contraction across keyword categories, including the near disappearance of procedure terms as the Spruchkammer system ended.

Stage 3—reactivation (1961–1969). The early 1960s show a modest but detectable rebound in normalized attention (to roughly 9%), coinciding with the Eichmann trial (1961) and the Frankfurt Auschwitz trial (1963–1965). More consequential than volume is a shift in composition: Figure 3 indicates that procedural and trial-centered categories recede in relative weight, while ‘victims and memory’ and ‘guilt and responsibility’ become more prominent. The local press moves from asking how to process perpetrators to how to remember victims.

Stage 4—institutionalization (1970–1977). In the 1970s, attention stabilizes at a low baseline. Although the normalized proportion drops to roughly 3–4%, it does not approach zero, suggesting that memory discourse became routinized. A small uptick in 1977 (around 7%) may reflect renewed debate over the statute of limitations (Verjährung) for Nazi crimes.

Comparing BRD and EXILE time series reveals a notable temporal offset (Figure 1). Exile coverage peaks in 1946 and then declines steadily; BRD local press peaks later (1949–1950). The offset reflects different news cycles: exile newspapers responded urgently to early postwar reckoning but later shifted attention to Israel’s founding and resettlement, whereas domestic local newspapers tracked the bureaucratic tempo of denazification administration.

## 4.2 Narrative Frames (Topic Modeling)

Topic modeling (k = 14; perplexity = 2201.46) separates topics directly relevant to denazification and historical memory from topics that reflect the heterogeneous content of page-level newspapers. The presence of many ‘non-core’ topics underscores a key point: even after two-pass keyword filtering, each page still contains substantial unrelated content.

Four topics map especially clearly onto denazification- and memory-related frames. Topic 1 (6.5%) centers on criminal trials and judicial procedure, with high-weight terms such as Schwurgericht, Angeklagter, Freispruch, Anklageschrift, and Zeuge. Topic 13 (7.4%) captures occupation-era administration (1945–1949), with Bizone, Militärregierung, Kontrollrat, Demontage, and Bodenreform. Topic 9 (9.9%) reflects federal politics, including Adenauer, Bundeskanzler, Bundesregierung, and debates over amnesty and limitations. Topic 3 (9.5%) corresponds to ideological framing and Cold War narratives, with Arbeiterklasse, Marxismus, Imperialismus, Kapitalismus, and Sozialismus—consistent with leftist readings of fascism as an extreme form of capitalism.

The remaining topics cover the broader ecology of local newspapers (local elections, international Cold War news, sports, economy, arts and culture, community life, crime reporting, classifieds, and narrative literature). One small topic (1.8%) consists largely of OCR artifacts, illustrating how noise penetrates models trained on historical OCR text.

An important absence is itself a finding: none of the 14 topics forms a distinct cluster devoted primarily to commemoration of victims or reflective memory discourse. This suggests that memorial language is more diffuse—spread across multiple topics—rather than concentrated into a single thematic cluster. The pattern may partly reflect the late and dispersed emergence of commemorative discourse and also the structural constraints of page-level units.

## 4.3 Semantic Drift in Core Concepts

To trace conceptual change, we trained separate FastText embedding models for four periods and aligned their vector spaces using orthogonal Procrustes rotation (Hamilton et al., 2016; Schönemann, 1966). We report three outputs: nearest-neighbor trajectories, Jaccard-based stability, and directional analysis.

Figure 4. Diachronic nearest neighbors of “Schuld” by period (Top 10 per period).

Figure 5. Diachronic nearest neighbors of “Opfer” by period (Top 10 per period).

Figure 6. Semantic drift intensity heatmap (1 − Jaccard similarity of neighbor sets).

Figure 7. Directional semantic shift for core concepts across periods.

Nearest-neighbor trajectories indicate a systematic shift in the semantic field of Schuld. In 1945–1949, neighbors are dominated by moral–political compound terms such as Mitschuld, Gesamtschuld, and Schuldfrage, pointing to collective moral interrogation. In 1950–1959, economic–legal terms such as Schulden begin to enter the neighborhood; by 1970–1977, Schuld is strongly anchored in an economic–legal register (e.g., Schuldner, Buchschuld, Steuerschuld). This ‘moral-to-legal/economic’ drift mirrors macro-historical accounts of a de-moralization of the Nazi past in the Federal Republic (Frei, 1996).

Opfer follows a different trajectory. Early neighbors (1945–1949) include Tote and Gefallene and show a strong linkage to antifascist political framing (Faschismus). The 1950s move toward a broader humanitarian register (Menschenleben, Überleben), while the 1970s shift toward institutionalized commemoration (Volkstrauer). In short, Opfer increasingly becomes a category of public ritual rather than only an object of justice claims.

Because FastText leverages subword n-grams, morphological variants can appear artificially close in vector space (Bojanowski et al., 2017). We therefore rely on directional analysis as the most robust indicator. For Schuld, the directional score (personal/legal vs collective/political) peaks in 1950–1959, consistent with the late phase of Spruchkammer adjudication. In 1960–1969, the score drops to near zero, suggesting a high-tension semantic equilibrium: collective moral-political questioning and individualized legal-judicial reckoning exert comparable ‘semantic gravity’ after the major trials. For Opfer, the directional trajectory (victim/memorial vs perpetrator/political) becomes most memorial-oriented in 1960–1969, echoing the trial-driven reactivation of victim narratives.

The Jaccard-based drift heatmap (Figure 6) indicates that the transition from the 1950s to the 1960s produces the highest drift values for most target concepts. This aligns with the time-series and category-trend evidence that the 1960s constitute a major reconfiguration of discourse. At the same time, differences in corpus size across periods likely inflate drift estimates in later periods; the heatmap is therefore suggestive rather than definitive.

## 4.4 The Exile Press as a Comparative Lens (1945–1950)

The EXILE sub-corpus (2,237 pages) is drawn primarily from Aufbau (New York) and Das andere Deutschland (Buenos Aires), with smaller contributions from publications produced by the Shanghai Jewish refugee community. Comparing EXILE and BRD during 1945–1950 reveals parallel but structurally distinct narratives.

Figure 8. Keyword-category distribution in FRG (BRD) local newspapers vs exile newspapers (EXILE), 1945–1950 (normalized).

Figure 9. Top keywords in FRG (BRD) local newspapers vs exile newspapers (EXILE), 1945–1950.

The normalized category distribution (Figure 8) shows the starkest divergence in procedural terms. Denazification-process keywords account for roughly 44% of category hits in BRD local newspapers but only about 19% in EXILE—a gap of roughly 25 percentage points. This maps onto different lived realities: domestic readers navigated Spruchkammer procedures, questionnaires, and administrative classifications, whereas exile communities did not bear the bureaucratic burden of denazification.

Conversely, historical-reckoning language is far more salient in EXILE (about 13%) than in BRD (about 3%). Aufarbeitung appears among the most frequent EXILE keywords (Figure 9) but is virtually absent in BRD. Ideological framing is also slightly higher in EXILE (about 34% vs 30%), indicating a stronger tendency to situate Nazism within broader ideological critique.

At the keyword level (Figure 9), EXILE discourse is anchored in Widerstand, Verantwortung, Konzentrationslager, Wiedergutmachung, and Verfolgung—an explicitly victim-centered narrative that pairs suffering with demands for responsibility and restitution. Domestic local newspapers share some key terms (e.g., Verantwortung, Widerstand) but remain more saturated with procedural vocabulary (Spruchkammer, Entnazifizierung, Säuberung, Belastete). Notably, Wiedergutmachung does not rank among the top ten BRD keywords, and Aufarbeitung is absent, underscoring a lower discursive priority for restitution and reflective reckoning in domestic local media.

These contrasts reinforce a key interpretive point: the ‘silence’ of the 1950s is geographically and socially bounded. Those expelled from Germany did not stop talking about responsibility and suffering; the retreat is most visible among those who remained and had to reach a workable accommodation with their neighbors and institutions. In this sense, the divergence resonates with discussions of perpetrator memory versus victim memory (Assmann, 2006).

# 5. Discussion

## 5.1 Synthesis of Findings

Across methods, three independent evidentiary strands converge on a coherent account: West German local-press discourse followed a four-stage trajectory from confrontation to silence, then reactivation, and finally institutionalization. The time series captures the macro-curve of attention; category trends show a shift from procedural and judicial frames toward victim- and memory-oriented frames; and semantic analyses trace Schuld’s drift from moral–political guilt to economic–legal debt alongside the reconfiguration of Opfer toward commemorative ritual. The convergence of volume and meaning measures strengthens confidence in the interpretation that the 1960s were the most intense decade of discursive reconfiguration.

The local-press perspective adds a micro-social layer to narratives derived from elite media. Local newspapers are embedded in communities where denazification decisions directly affected neighbor relations and occupational prospects. Their sharp post-1953 decline may therefore record community-level retreat more faithfully than national newspapers, which could sustain occasional reflective debate among intellectual elites even as local communities withdrew.

The EXILE comparison provides a crucial counterfactual: it demonstrates that post-1950 silence was not universal. Exile newspapers sustained a discourse oriented toward persecution, responsibility, and restitution, suggesting that the retreat in domestic discourse was tied to social positioning and the pragmatics of coexistence in postwar Germany.

## 5.2 Theoretical Implications

The findings speak to three theoretical issues in collective-memory research. First, the long-run shift from denazification procedures toward victims-and-memory language maps onto Assmann’s distinction between communicative and cultural memory (Assmann, 1995). In the late 1940s, local newspapers recorded communicative memory closely tied to lived administrative experience; by the 1970s, terms such as Volkstrauertag and memorial practices suggest a translation into institutionalized cultural memory. Local newspapers appear as mediators in this transformation: neither mere transmitters of state memory policy nor purely bottom-up records, they are arenas of negotiation between top-down and community-level dynamics.

Second, Schuld’s drift can be conceptualized through Jaspers’ typology of guilt (Jaspers, 1946). Early neighbors such as Mitschuld and Gesamtschuld align with moral and metaphysical registers—unsettling questions without procedural closure. Later movement toward Schulden and Steuerschuld suggests a retreat into criminal and political registers that can be settled administratively and juridically—echoing Giordano’s ‘second guilt’ as the guilt of refusing to feel guilt.

Third, the structural divergence between exile and domestic discourse underscores that framing functions are rooted in social position. The same past can be framed as suffering and justice (victim community) or as administrative procedure (domestic community). This observation deepens framing theory’s emphasis on how problem definition, causal diagnosis, moral evaluation, and remedy suggestion are conditioned by social location (Entman, 1993).

## 5.3 Limitations and Future Work


1. Geographic concentration. The BRD corpus is heavily concentrated in Baden-Württemberg and North Rhine–Westphalia and is not representative of the entire Federal Republic.
2. Page-level granularity. DDB records pages rather than segmented articles; keyword co-occurrence on a page does not guarantee co-occurrence within a single article. Two-pass filtering mitigates but does not eliminate this limitation.
3. Temporal truncation. Coverage after 1977 drops sharply, preventing analysis of key later memory events such as the 1979 TV miniseries Holocaust, the Bitburg controversy (1985), and the Historikerstreit (1986).
4. OCR noise and embedding artifacts. Despite FastText’s subword robustness, OCR errors and morphological similarity can distort nearest-neighbor interpretations. Directional analysis reduces this risk but introduces dependence on researcher-defined word sets.

Future work could extend the time window and incorporate additional archives (e.g., ZEFYS) to improve coverage of East German newspapers and later West German memory debates. Advances in layout analysis may enable article-level segmentation, improving measurement precision beyond page-level proxies.

# 6. Conclusion

By combining large-scale archival data with complementary computational methods, this study provides a local-press perspective on how West German society narrated and managed the Nazi past between 1945 and 1977. The evidence suggests a shift from administrative confrontation to silencing, followed by a trial-driven reconfiguration and eventual routinization of memory discourse. Exile newspapers provide a critical contrast, showing that the domestic retreat of the 1950s was not a universal condition but a socially situated one. Substantively, the paper highlights local newspapers as a key site where communicative memory is translated into cultural memory; methodologically, it demonstrates practical strategies for working with noisy OCR historical corpora.

# References

Assmann, A. (2006). Der lange Schatten der Vergangenheit: Erinnerungskultur und Geschichtspolitik. C.H. Beck.

Assmann, A. (2008). Transformations between History and Memory. Social Research, 75(1), 49–72.

Assmann, J. (1995). Collective Memory and Cultural Identity. New German Critique, 65, 125–133.

Bingham, A. (2010). The Digitization of Newspaper Archives: Opportunities and Challenges for Historians. Twentieth Century British History, 21(2), 225–231.

Blei, D. M., Ng, A. Y., & Jordan, M. I. (2003). Latent Dirichlet Allocation. Journal of Machine Learning Research, 3, 993–1022.

Bojanowski, P., Grave, E., Joulin, A., & Mikolov, T. (2017). Enriching Word Vectors with Subword Information. Transactions of the Association for Computational Linguistics, 5, 135–146.

Edy, J. A. (1999). Journalistic Uses of Collective Memory. Journal of Communication, 49(2), 71–85.

Entman, R. M. (1993). Framing: Toward Clarification of a Fractured Paradigm. Journal of Communication, 43(4), 51–58.

Frei, N. (1996). Vergangenheitspolitik: Die Anfänge der Bundesrepublik und die NS-Vergangenheit. C.H. Beck.

Giordano, R. (1987). Die zweite Schuld oder Von der Last, Deutscher zu sein. Rasch und Röhring.

Grimmer, J., & Stewart, B. M. (2013). Text as Data: The Promise and Pitfalls of Automatic Content Analysis Methods for Political Texts. Political Analysis, 21(3), 267–297.

Halbwachs, M. (1992). On Collective Memory (L. A. Coser, Trans.). University of Chicago Press. (Original work published 1925)

Hamilton, W. L., Leskovec, J., & Jurafsky, D. (2016). Diachronic Word Embeddings Reveal Statistical Laws of Semantic Change. In Proceedings of the 54th Annual Meeting of the Association for Computational Linguistics (pp. 1489–1501). ACL.

Herf, J. (1997). Divided Memory: The Nazi Past in the Two Germanys. Harvard University Press.

Jaspers, K. (1946). Die Schuldfrage. Lambert Schneider.

Kansteiner, W. (2006). In Pursuit of German Memory: History, Television, and Politics after Auschwitz. Ohio University Press.

Kulkarni, V., Al-Rfou, R., Perozzi, B., & Skiena, S. (2015). Statistically Significant Detection of Linguistic Change. In Proceedings of the 24th International Conference on World Wide Web (pp. 625–635). ACM.

Manning, C. D., Raghavan, P., & Schütze, H. (2008). Introduction to Information Retrieval. Cambridge University Press.

Mauch, C., & Salmons, J. (Eds.). (2005). German-Jewish Identities in America. University of Wisconsin Press.

McCombs, M. E., & Shaw, D. L. (1972). The Agenda-Setting Function of Mass Media. Public Opinion Quarterly, 36(2), 176–187.

Mitscherlich, A., & Mitscherlich, M. (1967). Die Unfähigkeit zu trauern: Grundlagen kollektiven Verhaltens. Piper.

Newman, D. J., & Block, S. (2006). Probabilistic Topic Decomposition of an Eighteenth-Century American Newspaper. Journal of the American Society for Information Science and Technology, 57(6), 753–767.

Nicholson, B. (2013). The Digital Turn: Exploring the Methodological Possibilities of Digital Newspaper Archives. Media History, 19(1), 59–73.

Reichel, P. (2001). Vergangenheitsbewältigung in Deutschland: Die Auseinandersetzung mit der NS-Diktatur von 1945 bis heute. C.H. Beck.

Röder, M., Both, A., & Hinneburg, A. (2015). Exploring the Space of Topic Coherence Measures. In Proceedings of the Eighth ACM International Conference on Web Search and Data Mining (pp. 399–408). ACM.

Schönemann, P. H. (1966). A Generalized Solution of the Orthogonal Procrustes Problem. Psychometrika, 31(1), 1–10.

Sznaider, N. (2001). The Compassionate Temperament: Care and Cruelty in Modern Society. Rowman & Littlefield.

Traub, M. C., van Ossenbruggen, J., & Hardman, L. (2015). Impact of Digitization Quality on Historical Newspaper Research. In Proceedings of the ACM/IEEE Joint Conference on Digital Libraries (pp. 95–98). ACM.

van Atteveldt, W., & Peng, T.-Q. (2018). When Communication Meets Computation: Opportunities, Challenges, and Pitfalls in Computational Communication Science. Communication Methods and Measures, 12(2–3), 81–92.

Viola, L., & Verheul, J. (2020). Mining Ethnicity: Discourse-Driven Topic Modelling of Immigrant Discourses in the USA, 1898–1920. Digital Scholarship in the Humanities, 35(4), 921–943.

Weinke, A. (2006). Die Verfolgung von NS-Tätern im geteilten Deutschland: Vergangenheitsbewältigungen 1949–1969, oder: Eine deutsch-deutsche Beziehungsgeschichte im Kalten Krieg. Schöningh.

Wolfrum, E. (1999). Geschichtspolitik in der Bundesrepublik Deutschland: Der Weg zur bundesrepublikanischen Erinnerung 1948–1990. Wissenschaftliche Buchgesellschaft.

Zelizer, B. (1992). Covering the Body: The Kennedy Assassination, the Media, and the Shaping of Collective Memory. University of Chicago Press.
