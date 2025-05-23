// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const QDELAUNAY_METADATA: Metadata = {
    id: "a916e82e97bc11f21ddb66b1db2b18fd597bc7b9.boutiques",
    name: "qdelaunay",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface QdelaunayParameters {
    "__STYXTYPE__": "qdelaunay";
    "input_file": InputPathType;
    "furthest_site": boolean;
    "triangulated_output": boolean;
    "joggled_input": boolean;
    "joggle_range"?: number | null | undefined;
    "search_simplex": boolean;
    "point_infinity": boolean;
    "delaunay_visible"?: string | null | undefined;
    "delaunay_regions"?: string | null | undefined;
    "trace_level"?: number | null | undefined;
    "check": boolean;
    "statistics": boolean;
    "verify": boolean;
    "output_stdout": boolean;
    "facets_summary"?: number | null | undefined;
    "input_file_option"?: InputPathType | null | undefined;
    "output_file_option"?: InputPathType | null | undefined;
    "trace_point"?: number | null | undefined;
    "trace_merge"?: number | null | undefined;
    "trace_merge_width"?: number | null | undefined;
    "stop_point"?: number | null | undefined;
    "stop_cone_point"?: number | null | undefined;
    "centrum_radius"?: number | null | undefined;
    "max_angle_cosine"?: number | null | undefined;
    "perturb_factor"?: number | null | undefined;
    "min_facet_width"?: number | null | undefined;
    "facet_dump": boolean;
    "geomview": boolean;
    "vertices_incident": boolean;
    "mathematica": boolean;
    "off_format": boolean;
    "point_coordinates": boolean;
    "summary": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "qdelaunay": qdelaunay_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `qdelaunay(...)`.
 *
 * @interface
 */
interface QdelaunayOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function qdelaunay_params(
    input_file: InputPathType,
    furthest_site: boolean = false,
    triangulated_output: boolean = false,
    joggled_input: boolean = false,
    joggle_range: number | null = null,
    search_simplex: boolean = false,
    point_infinity: boolean = false,
    delaunay_visible: string | null = null,
    delaunay_regions: string | null = null,
    trace_level: number | null = null,
    check: boolean = false,
    statistics: boolean = false,
    verify: boolean = false,
    output_stdout: boolean = false,
    facets_summary: number | null = null,
    input_file_option: InputPathType | null = null,
    output_file_option: InputPathType | null = null,
    trace_point: number | null = null,
    trace_merge: number | null = null,
    trace_merge_width: number | null = null,
    stop_point: number | null = null,
    stop_cone_point: number | null = null,
    centrum_radius: number | null = null,
    max_angle_cosine: number | null = null,
    perturb_factor: number | null = null,
    min_facet_width: number | null = null,
    facet_dump: boolean = false,
    geomview: boolean = false,
    vertices_incident: boolean = false,
    mathematica: boolean = false,
    off_format: boolean = false,
    point_coordinates: boolean = false,
    summary: boolean = false,
): QdelaunayParameters {
    /**
     * Build parameters.
    
     * @param input_file Input file containing point coordinates.
     * @param furthest_site Compute furthest-site Delaunay triangulation
     * @param triangulated_output Triangulated output
     * @param joggled_input Joggled input instead of merged facets
     * @param joggle_range Randomly joggle input in range [-n,n]
     * @param search_simplex Search all points for the initial simplex
     * @param point_infinity Add point-at-infinity to Delaunay triangulation
     * @param delaunay_visible Print Delaunay region if visible from point n, -n if not
     * @param delaunay_regions Print Delaunay regions that include point n, -n if not
     * @param trace_level Trace at level n, 4=all, 5=mem/gauss, -1= events
     * @param check Check frequently during execution
     * @param statistics Print statistics
     * @param verify Verify result: structure, convexity, and in-circle test
     * @param output_stdout Send all output to stdout
     * @param facets_summary Report summary when n or more facets created
     * @param input_file_option Input data from file, no spaces or single quotes
     * @param output_file_option Output results to file, may be enclosed in single quotes
     * @param trace_point Turn on tracing when point n added to hull
     * @param trace_merge Turn on tracing at merge n
     * @param trace_merge_width Trace merge facets when width > n
     * @param stop_point Stop Qhull after adding point n, -n for before
     * @param stop_cone_point Stop Qhull after building cone for point n
     * @param centrum_radius Radius of centrum (roundoff added). Merge facets if non-convex
     * @param max_angle_cosine Cosine of maximum angle. Merge facets if cosine > n or non-convex
     * @param perturb_factor Randomly perturb computations by a factor of [1-n,1+n]
     * @param min_facet_width Min facet width for outside point (before roundoff)
     * @param facet_dump Facet dump
     * @param geomview Geomview output
     * @param vertices_incident Vertices incident to each Delaunay region
     * @param mathematica Mathematica output (2-d only, lifted to a paraboloid)
     * @param off_format OFF format (dim, points, and facets as a paraboloid)
     * @param point_coordinates Point coordinates (lifted to a paraboloid)
     * @param summary Summary (stderr)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "qdelaunay" as const,
        "input_file": input_file,
        "furthest_site": furthest_site,
        "triangulated_output": triangulated_output,
        "joggled_input": joggled_input,
        "search_simplex": search_simplex,
        "point_infinity": point_infinity,
        "check": check,
        "statistics": statistics,
        "verify": verify,
        "output_stdout": output_stdout,
        "facet_dump": facet_dump,
        "geomview": geomview,
        "vertices_incident": vertices_incident,
        "mathematica": mathematica,
        "off_format": off_format,
        "point_coordinates": point_coordinates,
        "summary": summary,
    };
    if (joggle_range !== null) {
        params["joggle_range"] = joggle_range;
    }
    if (delaunay_visible !== null) {
        params["delaunay_visible"] = delaunay_visible;
    }
    if (delaunay_regions !== null) {
        params["delaunay_regions"] = delaunay_regions;
    }
    if (trace_level !== null) {
        params["trace_level"] = trace_level;
    }
    if (facets_summary !== null) {
        params["facets_summary"] = facets_summary;
    }
    if (input_file_option !== null) {
        params["input_file_option"] = input_file_option;
    }
    if (output_file_option !== null) {
        params["output_file_option"] = output_file_option;
    }
    if (trace_point !== null) {
        params["trace_point"] = trace_point;
    }
    if (trace_merge !== null) {
        params["trace_merge"] = trace_merge;
    }
    if (trace_merge_width !== null) {
        params["trace_merge_width"] = trace_merge_width;
    }
    if (stop_point !== null) {
        params["stop_point"] = stop_point;
    }
    if (stop_cone_point !== null) {
        params["stop_cone_point"] = stop_cone_point;
    }
    if (centrum_radius !== null) {
        params["centrum_radius"] = centrum_radius;
    }
    if (max_angle_cosine !== null) {
        params["max_angle_cosine"] = max_angle_cosine;
    }
    if (perturb_factor !== null) {
        params["perturb_factor"] = perturb_factor;
    }
    if (min_facet_width !== null) {
        params["min_facet_width"] = min_facet_width;
    }
    return params;
}


function qdelaunay_cargs(
    params: QdelaunayParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("qdelaunay");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    if ((params["furthest_site"] ?? null)) {
        cargs.push("Qu");
    }
    if ((params["triangulated_output"] ?? null)) {
        cargs.push("Qt");
    }
    if ((params["joggled_input"] ?? null)) {
        cargs.push("QJ");
    }
    if ((params["joggle_range"] ?? null) !== null) {
        cargs.push(
            "QJn",
            String((params["joggle_range"] ?? null))
        );
    }
    if ((params["search_simplex"] ?? null)) {
        cargs.push("Qs");
    }
    if ((params["point_infinity"] ?? null)) {
        cargs.push("Qz");
    }
    if ((params["delaunay_visible"] ?? null) !== null) {
        cargs.push(
            "QGn",
            (params["delaunay_visible"] ?? null)
        );
    }
    if ((params["delaunay_regions"] ?? null) !== null) {
        cargs.push(
            "QVn",
            (params["delaunay_regions"] ?? null)
        );
    }
    if ((params["trace_level"] ?? null) !== null) {
        cargs.push(
            "T4",
            String((params["trace_level"] ?? null))
        );
    }
    if ((params["check"] ?? null)) {
        cargs.push("Tc");
    }
    if ((params["statistics"] ?? null)) {
        cargs.push("Ts");
    }
    if ((params["verify"] ?? null)) {
        cargs.push("Tv");
    }
    if ((params["output_stdout"] ?? null)) {
        cargs.push("Tz");
    }
    if ((params["facets_summary"] ?? null) !== null) {
        cargs.push(
            "TFn",
            String((params["facets_summary"] ?? null))
        );
    }
    if ((params["input_file_option"] ?? null) !== null) {
        cargs.push(
            "TI",
            execution.inputFile((params["input_file_option"] ?? null))
        );
    }
    if ((params["output_file_option"] ?? null) !== null) {
        cargs.push(
            "TO",
            execution.inputFile((params["output_file_option"] ?? null))
        );
    }
    if ((params["trace_point"] ?? null) !== null) {
        cargs.push(
            "TPn",
            String((params["trace_point"] ?? null))
        );
    }
    if ((params["trace_merge"] ?? null) !== null) {
        cargs.push(
            "TMn",
            String((params["trace_merge"] ?? null))
        );
    }
    if ((params["trace_merge_width"] ?? null) !== null) {
        cargs.push(
            "TWn",
            String((params["trace_merge_width"] ?? null))
        );
    }
    if ((params["stop_point"] ?? null) !== null) {
        cargs.push(
            "TVn",
            String((params["stop_point"] ?? null))
        );
    }
    if ((params["stop_cone_point"] ?? null) !== null) {
        cargs.push(
            "TCn",
            String((params["stop_cone_point"] ?? null))
        );
    }
    if ((params["centrum_radius"] ?? null) !== null) {
        cargs.push(
            "Cn",
            String((params["centrum_radius"] ?? null))
        );
    }
    if ((params["max_angle_cosine"] ?? null) !== null) {
        cargs.push(
            "An",
            String((params["max_angle_cosine"] ?? null))
        );
    }
    if ((params["perturb_factor"] ?? null) !== null) {
        cargs.push(
            "Rn",
            String((params["perturb_factor"] ?? null))
        );
    }
    if ((params["min_facet_width"] ?? null) !== null) {
        cargs.push(
            "Wn",
            String((params["min_facet_width"] ?? null))
        );
    }
    if ((params["facet_dump"] ?? null)) {
        cargs.push("f");
    }
    if ((params["geomview"] ?? null)) {
        cargs.push("G");
    }
    if ((params["vertices_incident"] ?? null)) {
        cargs.push("i");
    }
    if ((params["mathematica"] ?? null)) {
        cargs.push("m");
    }
    if ((params["off_format"] ?? null)) {
        cargs.push("o");
    }
    if ((params["point_coordinates"] ?? null)) {
        cargs.push("p");
    }
    if ((params["summary"] ?? null)) {
        cargs.push("s");
    }
    return cargs;
}


function qdelaunay_outputs(
    params: QdelaunayParameters,
    execution: Execution,
): QdelaunayOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: QdelaunayOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function qdelaunay_execute(
    params: QdelaunayParameters,
    execution: Execution,
): QdelaunayOutputs {
    /**
     * Compute the Delaunay triangulation using Qhull.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `QdelaunayOutputs`).
     */
    params = execution.params(params)
    const cargs = qdelaunay_cargs(params, execution)
    const ret = qdelaunay_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function qdelaunay(
    input_file: InputPathType,
    furthest_site: boolean = false,
    triangulated_output: boolean = false,
    joggled_input: boolean = false,
    joggle_range: number | null = null,
    search_simplex: boolean = false,
    point_infinity: boolean = false,
    delaunay_visible: string | null = null,
    delaunay_regions: string | null = null,
    trace_level: number | null = null,
    check: boolean = false,
    statistics: boolean = false,
    verify: boolean = false,
    output_stdout: boolean = false,
    facets_summary: number | null = null,
    input_file_option: InputPathType | null = null,
    output_file_option: InputPathType | null = null,
    trace_point: number | null = null,
    trace_merge: number | null = null,
    trace_merge_width: number | null = null,
    stop_point: number | null = null,
    stop_cone_point: number | null = null,
    centrum_radius: number | null = null,
    max_angle_cosine: number | null = null,
    perturb_factor: number | null = null,
    min_facet_width: number | null = null,
    facet_dump: boolean = false,
    geomview: boolean = false,
    vertices_incident: boolean = false,
    mathematica: boolean = false,
    off_format: boolean = false,
    point_coordinates: boolean = false,
    summary: boolean = false,
    runner: Runner | null = null,
): QdelaunayOutputs {
    /**
     * Compute the Delaunay triangulation using Qhull.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Input file containing point coordinates.
     * @param furthest_site Compute furthest-site Delaunay triangulation
     * @param triangulated_output Triangulated output
     * @param joggled_input Joggled input instead of merged facets
     * @param joggle_range Randomly joggle input in range [-n,n]
     * @param search_simplex Search all points for the initial simplex
     * @param point_infinity Add point-at-infinity to Delaunay triangulation
     * @param delaunay_visible Print Delaunay region if visible from point n, -n if not
     * @param delaunay_regions Print Delaunay regions that include point n, -n if not
     * @param trace_level Trace at level n, 4=all, 5=mem/gauss, -1= events
     * @param check Check frequently during execution
     * @param statistics Print statistics
     * @param verify Verify result: structure, convexity, and in-circle test
     * @param output_stdout Send all output to stdout
     * @param facets_summary Report summary when n or more facets created
     * @param input_file_option Input data from file, no spaces or single quotes
     * @param output_file_option Output results to file, may be enclosed in single quotes
     * @param trace_point Turn on tracing when point n added to hull
     * @param trace_merge Turn on tracing at merge n
     * @param trace_merge_width Trace merge facets when width > n
     * @param stop_point Stop Qhull after adding point n, -n for before
     * @param stop_cone_point Stop Qhull after building cone for point n
     * @param centrum_radius Radius of centrum (roundoff added). Merge facets if non-convex
     * @param max_angle_cosine Cosine of maximum angle. Merge facets if cosine > n or non-convex
     * @param perturb_factor Randomly perturb computations by a factor of [1-n,1+n]
     * @param min_facet_width Min facet width for outside point (before roundoff)
     * @param facet_dump Facet dump
     * @param geomview Geomview output
     * @param vertices_incident Vertices incident to each Delaunay region
     * @param mathematica Mathematica output (2-d only, lifted to a paraboloid)
     * @param off_format OFF format (dim, points, and facets as a paraboloid)
     * @param point_coordinates Point coordinates (lifted to a paraboloid)
     * @param summary Summary (stderr)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `QdelaunayOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(QDELAUNAY_METADATA);
    const params = qdelaunay_params(input_file, furthest_site, triangulated_output, joggled_input, joggle_range, search_simplex, point_infinity, delaunay_visible, delaunay_regions, trace_level, check, statistics, verify, output_stdout, facets_summary, input_file_option, output_file_option, trace_point, trace_merge, trace_merge_width, stop_point, stop_cone_point, centrum_radius, max_angle_cosine, perturb_factor, min_facet_width, facet_dump, geomview, vertices_incident, mathematica, off_format, point_coordinates, summary)
    return qdelaunay_execute(params, execution);
}


export {
      QDELAUNAY_METADATA,
      QdelaunayOutputs,
      QdelaunayParameters,
      qdelaunay,
      qdelaunay_params,
};
