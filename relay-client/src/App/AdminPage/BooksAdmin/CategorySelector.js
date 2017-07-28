import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'App/environment';
import ErrorAlert from 'Common/ErrorAlert';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const categoriesSelectorQuery = graphql`
  query CategorySelectorQuery {
    categories {
      id
      label
    }
  }
`;

const CategorySelector = ({ value, categories, loading, onChange }) =>
  <Select
    name="categories-selector-field"
    multi={true}
    value={value}
    options={categories.map(cat => ({ value: cat.id, label: cat.label }))}
    onChange={onChange}
    isLoading={loading}
  />;

const CategorySelectorRenderer = ({ value, onChange }) =>
  <QueryRenderer
    environment={environment}
    query={categoriesSelectorQuery}
    render={({ error, props }) => {
      if (error) return <ErrorAlert error={error} />;

      if (props)
        return <CategorySelector value={value} categories={props.categories} onChange={onChange} loading={false} />;

      return <CategorySelector categories={[]} onChange={onChange} loading={true} />;
    }}
  />;

export default CategorySelectorRenderer;
