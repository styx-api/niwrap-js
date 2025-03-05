// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_FALSE_CORRELATION_METADATA: Metadata = {
    id: "305c93f3a6d583446150f0a5829082da2a5823ee.boutiques",
    name: "cifti-false-correlation",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiFalseCorrelationLeftSurfaceParameters {
    "__STYXTYPE__": "left_surface";
    "surface": InputPathType;
    "opt_dump_text_text_out"?: string | null | undefined;
}


interface CiftiFalseCorrelationRightSurfaceParameters {
    "__STYXTYPE__": "right_surface";
    "surface": InputPathType;
    "opt_dump_text_text_out"?: string | null | undefined;
}


interface CiftiFalseCorrelationCerebellumSurfaceParameters {
    "__STYXTYPE__": "cerebellum_surface";
    "surface": InputPathType;
    "opt_dump_text_text_out"?: string | null | undefined;
}


interface CiftiFalseCorrelationParameters {
    "__STYXTYPE__": "cifti-false-correlation";
    "cifti_in": InputPathType;
    "3d_dist": number;
    "geo_outer": number;
    "geo_inner": number;
    "cifti_out": string;
    "left_surface"?: CiftiFalseCorrelationLeftSurfaceParameters | null | undefined;
    "right_surface"?: CiftiFalseCorrelationRightSurfaceParameters | null | undefined;
    "cerebellum_surface"?: CiftiFalseCorrelationCerebellumSurfaceParameters | null | undefined;
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
        "cifti-false-correlation": cifti_false_correlation_cargs,
        "left_surface": cifti_false_correlation_left_surface_cargs,
        "right_surface": cifti_false_correlation_right_surface_cargs,
        "cerebellum_surface": cifti_false_correlation_cerebellum_surface_cargs,
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
        "cifti-false-correlation": cifti_false_correlation_outputs,
    };
    return outputsFuncs[t];
}


function cifti_false_correlation_left_surface_params(
    surface: InputPathType,
    opt_dump_text_text_out: string | null = null,
): CiftiFalseCorrelationLeftSurfaceParameters {
    /**
     * Build parameters.
    
     * @param surface the left surface file
     * @param opt_dump_text_text_out dump the raw measures used to a text file: the output text file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "left_surface" as const,
        "surface": surface,
    };
    if (opt_dump_text_text_out !== null) {
        params["opt_dump_text_text_out"] = opt_dump_text_text_out;
    }
    return params;
}


function cifti_false_correlation_left_surface_cargs(
    params: CiftiFalseCorrelationLeftSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-left-surface");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    if ((params["opt_dump_text_text_out"] ?? null) !== null) {
        cargs.push(
            "-dump-text",
            (params["opt_dump_text_text_out"] ?? null)
        );
    }
    return cargs;
}


function cifti_false_correlation_right_surface_params(
    surface: InputPathType,
    opt_dump_text_text_out: string | null = null,
): CiftiFalseCorrelationRightSurfaceParameters {
    /**
     * Build parameters.
    
     * @param surface the right surface file
     * @param opt_dump_text_text_out dump the raw measures used to a text file: the output text file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "right_surface" as const,
        "surface": surface,
    };
    if (opt_dump_text_text_out !== null) {
        params["opt_dump_text_text_out"] = opt_dump_text_text_out;
    }
    return params;
}


function cifti_false_correlation_right_surface_cargs(
    params: CiftiFalseCorrelationRightSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-right-surface");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    if ((params["opt_dump_text_text_out"] ?? null) !== null) {
        cargs.push(
            "-dump-text",
            (params["opt_dump_text_text_out"] ?? null)
        );
    }
    return cargs;
}


function cifti_false_correlation_cerebellum_surface_params(
    surface: InputPathType,
    opt_dump_text_text_out: string | null = null,
): CiftiFalseCorrelationCerebellumSurfaceParameters {
    /**
     * Build parameters.
    
     * @param surface the cerebellum surface file
     * @param opt_dump_text_text_out dump the raw measures used to a text file: the output text file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cerebellum_surface" as const,
        "surface": surface,
    };
    if (opt_dump_text_text_out !== null) {
        params["opt_dump_text_text_out"] = opt_dump_text_text_out;
    }
    return params;
}


function cifti_false_correlation_cerebellum_surface_cargs(
    params: CiftiFalseCorrelationCerebellumSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-cerebellum-surface");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    if ((params["opt_dump_text_text_out"] ?? null) !== null) {
        cargs.push(
            "-dump-text",
            (params["opt_dump_text_text_out"] ?? null)
        );
    }
    return cargs;
}


/**
 * Output object returned when calling `cifti_false_correlation(...)`.
 *
 * @interface
 */
interface CiftiFalseCorrelationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti dscalar file
     */
    cifti_out: OutputPathType;
}


function cifti_false_correlation_params(
    cifti_in: InputPathType,
    v_3d_dist: number,
    geo_outer: number,
    geo_inner: number,
    cifti_out: string,
    left_surface: CiftiFalseCorrelationLeftSurfaceParameters | null = null,
    right_surface: CiftiFalseCorrelationRightSurfaceParameters | null = null,
    cerebellum_surface: CiftiFalseCorrelationCerebellumSurfaceParameters | null = null,
): CiftiFalseCorrelationParameters {
    /**
     * Build parameters.
    
     * @param cifti_in the cifti file to use for correlation
     * @param v_3d_dist maximum 3D distance to check around each vertex
     * @param geo_outer maximum geodesic distance to use for neighboring correlation
     * @param geo_inner minimum geodesic distance to use for neighboring correlation
     * @param cifti_out the output cifti dscalar file
     * @param left_surface specify the left surface to use
     * @param right_surface specify the right surface to use
     * @param cerebellum_surface specify the cerebellum surface to use
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-false-correlation" as const,
        "cifti_in": cifti_in,
        "3d_dist": v_3d_dist,
        "geo_outer": geo_outer,
        "geo_inner": geo_inner,
        "cifti_out": cifti_out,
    };
    if (left_surface !== null) {
        params["left_surface"] = left_surface;
    }
    if (right_surface !== null) {
        params["right_surface"] = right_surface;
    }
    if (cerebellum_surface !== null) {
        params["cerebellum_surface"] = cerebellum_surface;
    }
    return params;
}


function cifti_false_correlation_cargs(
    params: CiftiFalseCorrelationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-cifti-false-correlation");
    cargs.push(execution.inputFile((params["cifti_in"] ?? null)));
    cargs.push(String((params["3d_dist"] ?? null)));
    cargs.push(String((params["geo_outer"] ?? null)));
    cargs.push(String((params["geo_inner"] ?? null)));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["left_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["left_surface"] ?? null).__STYXTYPE__)((params["left_surface"] ?? null), execution));
    }
    if ((params["right_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["right_surface"] ?? null).__STYXTYPE__)((params["right_surface"] ?? null), execution));
    }
    if ((params["cerebellum_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["cerebellum_surface"] ?? null).__STYXTYPE__)((params["cerebellum_surface"] ?? null), execution));
    }
    return cargs;
}


function cifti_false_correlation_outputs(
    params: CiftiFalseCorrelationParameters,
    execution: Execution,
): CiftiFalseCorrelationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiFalseCorrelationOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_false_correlation_execute(
    params: CiftiFalseCorrelationParameters,
    execution: Execution,
): CiftiFalseCorrelationOutputs {
    /**
     * Compare correlation locally and across/through sulci/gyri.
     * 
     * For each vertex, compute the average correlation within a range of geodesic distances that don't cross a sulcus/gyrus, and the correlation to the closest vertex crossing a sulcus/gyrus.  A vertex is considered to cross a sulcus/gyrus if the 3D distance is less than a third of the geodesic distance.  The output file contains the ratio between these correlations, and some additional maps to help explain the ratio.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiFalseCorrelationOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_false_correlation_cargs(params, execution)
    const ret = cifti_false_correlation_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_false_correlation(
    cifti_in: InputPathType,
    v_3d_dist: number,
    geo_outer: number,
    geo_inner: number,
    cifti_out: string,
    left_surface: CiftiFalseCorrelationLeftSurfaceParameters | null = null,
    right_surface: CiftiFalseCorrelationRightSurfaceParameters | null = null,
    cerebellum_surface: CiftiFalseCorrelationCerebellumSurfaceParameters | null = null,
    runner: Runner | null = null,
): CiftiFalseCorrelationOutputs {
    /**
     * Compare correlation locally and across/through sulci/gyri.
     * 
     * For each vertex, compute the average correlation within a range of geodesic distances that don't cross a sulcus/gyrus, and the correlation to the closest vertex crossing a sulcus/gyrus.  A vertex is considered to cross a sulcus/gyrus if the 3D distance is less than a third of the geodesic distance.  The output file contains the ratio between these correlations, and some additional maps to help explain the ratio.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti_in the cifti file to use for correlation
     * @param v_3d_dist maximum 3D distance to check around each vertex
     * @param geo_outer maximum geodesic distance to use for neighboring correlation
     * @param geo_inner minimum geodesic distance to use for neighboring correlation
     * @param cifti_out the output cifti dscalar file
     * @param left_surface specify the left surface to use
     * @param right_surface specify the right surface to use
     * @param cerebellum_surface specify the cerebellum surface to use
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiFalseCorrelationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_FALSE_CORRELATION_METADATA);
    const params = cifti_false_correlation_params(cifti_in, v_3d_dist, geo_outer, geo_inner, cifti_out, left_surface, right_surface, cerebellum_surface)
    return cifti_false_correlation_execute(params, execution);
}


export {
      CIFTI_FALSE_CORRELATION_METADATA,
      CiftiFalseCorrelationCerebellumSurfaceParameters,
      CiftiFalseCorrelationLeftSurfaceParameters,
      CiftiFalseCorrelationOutputs,
      CiftiFalseCorrelationParameters,
      CiftiFalseCorrelationRightSurfaceParameters,
      cifti_false_correlation,
      cifti_false_correlation_cerebellum_surface_params,
      cifti_false_correlation_left_surface_params,
      cifti_false_correlation_params,
      cifti_false_correlation_right_surface_params,
};
