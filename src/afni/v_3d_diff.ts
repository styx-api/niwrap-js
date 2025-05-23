// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_DIFF_METADATA: Metadata = {
    id: "7213e0a8a950ad09edafb5b67833470abda8875b.boutiques",
    name: "3dDiff",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dDiffParameters {
    "__STYXTYPE__": "3dDiff";
    "dataset_a": InputPathType;
    "dataset_b": InputPathType;
    "tolerance"?: number | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "quiet_mode": boolean;
    "tabular_mode": boolean;
    "brutalist_mode": boolean;
    "long_report_mode": boolean;
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
        "3dDiff": v_3d_diff_cargs,
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
        "3dDiff": v_3d_diff_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_diff(...)`.
 *
 * @interface
 */
interface V3dDiffOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Log file containing the element-wise differences.
     */
    output_log: OutputPathType;
}


function v_3d_diff_params(
    dataset_a: InputPathType,
    dataset_b: InputPathType,
    tolerance: number | null = null,
    mask: InputPathType | null = null,
    quiet_mode: boolean = false,
    tabular_mode: boolean = false,
    brutalist_mode: boolean = false,
    long_report_mode: boolean = false,
): V3dDiffParameters {
    /**
     * Build parameters.
    
     * @param dataset_a First input dataset for comparison.
     * @param dataset_b Second input dataset for comparison.
     * @param tolerance Floating-point tolerance/epsilon for the comparison.
     * @param mask Mask to use when comparing the datasets.
     * @param quiet_mode Quiet mode: 0 for no differences, 1 for differences, -1 for error.
     * @param tabular_mode Display a table of differences, mainly for 4D data.
     * @param brutalist_mode Display one-liner with summary of differences.
     * @param long_report_mode Print a detailed report with more information.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dDiff" as const,
        "dataset_a": dataset_a,
        "dataset_b": dataset_b,
        "quiet_mode": quiet_mode,
        "tabular_mode": tabular_mode,
        "brutalist_mode": brutalist_mode,
        "long_report_mode": long_report_mode,
    };
    if (tolerance !== null) {
        params["tolerance"] = tolerance;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    return params;
}


function v_3d_diff_cargs(
    params: V3dDiffParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dDiff");
    cargs.push(
        "-a",
        execution.inputFile((params["dataset_a"] ?? null))
    );
    cargs.push(
        "-b",
        execution.inputFile((params["dataset_b"] ?? null))
    );
    if ((params["tolerance"] ?? null) !== null) {
        cargs.push(
            "-tol",
            String((params["tolerance"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["quiet_mode"] ?? null)) {
        cargs.push("-q");
    }
    if ((params["tabular_mode"] ?? null)) {
        cargs.push("-tabular");
    }
    if ((params["brutalist_mode"] ?? null)) {
        cargs.push("-brutalist");
    }
    if ((params["long_report_mode"] ?? null)) {
        cargs.push("-long_report");
    }
    return cargs;
}


function v_3d_diff_outputs(
    params: V3dDiffParameters,
    execution: Execution,
): V3dDiffOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dDiffOutputs = {
        root: execution.outputFile("."),
        output_log: execution.outputFile([path.basename((params["dataset_a"] ?? null)), "_vs_", path.basename((params["dataset_b"] ?? null)), ".log"].join('')),
    };
    return ret;
}


function v_3d_diff_execute(
    params: V3dDiffParameters,
    execution: Execution,
): V3dDiffOutputs {
    /**
     * A program to examine element-wise differences between two images.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dDiffOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_diff_cargs(params, execution)
    const ret = v_3d_diff_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_diff(
    dataset_a: InputPathType,
    dataset_b: InputPathType,
    tolerance: number | null = null,
    mask: InputPathType | null = null,
    quiet_mode: boolean = false,
    tabular_mode: boolean = false,
    brutalist_mode: boolean = false,
    long_report_mode: boolean = false,
    runner: Runner | null = null,
): V3dDiffOutputs {
    /**
     * A program to examine element-wise differences between two images.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset_a First input dataset for comparison.
     * @param dataset_b Second input dataset for comparison.
     * @param tolerance Floating-point tolerance/epsilon for the comparison.
     * @param mask Mask to use when comparing the datasets.
     * @param quiet_mode Quiet mode: 0 for no differences, 1 for differences, -1 for error.
     * @param tabular_mode Display a table of differences, mainly for 4D data.
     * @param brutalist_mode Display one-liner with summary of differences.
     * @param long_report_mode Print a detailed report with more information.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dDiffOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_DIFF_METADATA);
    const params = v_3d_diff_params(dataset_a, dataset_b, tolerance, mask, quiet_mode, tabular_mode, brutalist_mode, long_report_mode)
    return v_3d_diff_execute(params, execution);
}


export {
      V3dDiffOutputs,
      V3dDiffParameters,
      V_3D_DIFF_METADATA,
      v_3d_diff,
      v_3d_diff_params,
};
