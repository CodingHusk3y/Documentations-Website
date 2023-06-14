import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Front End Installation",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        This will cover all of our Front's End's setup <br />
        <Link to="/docs/category/front-end">Learn more</Link>
      </>
    ),
  },
  {
    title: "Backend's Installation",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        This will cover all of our Front's End's setup <br />
        <Link to="/docs/category/backend--database-setup">Learn more</Link>
      </>
    ),
  },
  {
    title: "Pull Request's setup",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        After you're done with your code, we'll follow some instructions to
        create Merge Request <br />
        <Link to="/docs/category/pull-request-instruction">Learn more</Link>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Welcome to VStream Docs</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
