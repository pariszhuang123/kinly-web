import { KinlyButton } from "../primitives/button/KinlyButton";
import { KinlyCard } from "../primitives/card/KinlyCard";
import { KinlyHeading } from "../primitives/heading/KinlyHeading";
import { KinlyText } from "../primitives/text/KinlyText";
import type { ActionFilters, FilterDefinition } from "../../lib/prototypes/evnex/filters";
import styles from "../prototypes/evnex/EvnexControlTower.module.css";

type FilterBarProps = {
  title: string;
  filters: FilterDefinition[];
  selectedFilters: ActionFilters;
  actionPath: string;
};

export function FilterBar({ title, filters, selectedFilters, actionPath }: FilterBarProps) {
  return (
    <KinlyCard variant="surfaceContainer">
      <form action={actionPath} className={styles.filterForm}>
        <div className={styles.sectionHeader}>
          <KinlyHeading level={3}>{title}</KinlyHeading>
          <KinlyText variant="bodySmall" tone="muted">
            Filter by operating dimensions to isolate the exact records that need attention.
          </KinlyText>
        </div>
        <div className={styles.filterGrid}>
          {filters.map((filter) => (
            <label key={filter.key} className={styles.filterField}>
              <KinlyText variant="labelMedium" as="span">
                {filter.label}
              </KinlyText>
              <select name={filter.key} defaultValue={selectedFilters[filter.key]} className={styles.filterSelect}>
                <option value="">All</option>
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
        <div className={styles.actionRow}>
          <KinlyButton type="submit">Apply filters</KinlyButton>
          <KinlyButton href={actionPath} variant="outlined">
            Reset
          </KinlyButton>
        </div>
      </form>
    </KinlyCard>
  );
}
