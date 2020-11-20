import React, { Suspense } from "react";
import "./style.css";
import { createResource } from "./person";
import { Person } from "./personData";
import { Num } from "./Num";
const resource = createResource();
export default function App() {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </>
        }
      >
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>loading person...</h1>}>
        <Person resource={resource} />
      </Suspense>
    </div>
  );
}
