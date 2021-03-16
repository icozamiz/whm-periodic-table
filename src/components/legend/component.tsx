import { Box } from "@material-ui/core";
import * as React from "react";
import "./styles.scss";
import { categories, frCategories } from "../../data/categories";
import { ICategory } from "../../types";

export interface ILegendProps {
  isFrench: boolean;
  selectedCategory: string;
  onCategorySelected: (category?: ICategory) => void;
}

export const Legend = ({
  isFrench,
  selectedCategory,
  onCategorySelected,
}: ILegendProps) => {
  const cats = isFrench ? frCategories : categories;
  return (
    <Box className="legend">
      {cats.map((category) => {
        const className =
          selectedCategory === category.id
            ? `${category.id} icon selected`
            : `${category.id} icon`;
        const labelClassName =
          selectedCategory === category.id
            ? `${category.id} label selected`
            : `${category.id} label`;
        return (
          <Box
            className="legend-item"
            onMouseEnter={() => onCategorySelected(category)}
          >
            <Box className={className}></Box>
            <Box className={labelClassName}>{category.name}</Box>
          </Box>
        );
      })}
    </Box>
  );
};
