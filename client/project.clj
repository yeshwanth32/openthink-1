(defproject openthink "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.7.3"]
                 [sablono "0.2.15"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "openthink"
              :source-paths ["src"]
              :compiler {
                :output-to "../server/static/openthink.js"
                :output-dir "../server/static/out"
                :optimizations :none
                :source-map true}}]})
