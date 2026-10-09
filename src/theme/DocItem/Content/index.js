import React from 'react';
import Content from '@theme-original/DocItem/Content';
import Admonition from '@theme/Admonition';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

// Folders (doc id prefixes) where the disclaimer should NOT appear
const NO_DISCLAIMER_SECTIONS = ['contributors/', 'test/'];

export default function ContentWrapper(props) {
  const {metadata, frontMatter} = useDoc();

  const excluded = NO_DISCLAIMER_SECTIONS.some((prefix) =>
    metadata.id.startsWith(prefix),
  );
  const show = !excluded && !frontMatter.hide_disclaimer;

  return (
    <>
      {show && (
        <Admonition type="warning" title="Ostrzeżenie">
          Ten materiał jest przeznaczony wyłącznie do szkolenia wirtualnych
            kontrolerów ruchu lotniczego w sieci VATSIM. <b>Nie może być wykorzystywany
            w rzeczywistym lotnictwie.</b>
        </Admonition>
      )}
      <Content {...props} />
    </>
  );
}