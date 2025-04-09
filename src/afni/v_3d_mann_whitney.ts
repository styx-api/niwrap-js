// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_MANN_WHITNEY_METADATA: Metadata = {
    id: "e0fe96cdc7cfcb9551b9f02dac2ae2e304e42627.boutiques",
    name: "3dMannWhitney",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dMannWhitneyParameters {
    "__STYXTYPE__": "3dMannWhitney";
    "dset1_x": Array<string>;
    "dset2_y": Array<string>;
    "output_prefix": string;
    "workmem"?: number | null | undefined;
    "voxel_num"?: number | null | undefined;
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
        "3dMannWhitney": v_3d_mann_whitney_cargs,
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
        "3dMannWhitney": v_3d_mann_whitney_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_mann_whitney(...)`.
 *
 * @interface
 */
interface V3dMannWhitneyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output files for the estimated population delta and Wilcoxon-Mann-Whitney statistics.
     */
    output_files: OutputPathType;
}


function v_3d_mann_whitney_params(
    dset1_x: Array<string>,
    dset2_y: Array<string>,
    output_prefix: string,
    workmem: number | null = null,
    voxel_num: number | null = null,
): V3dMannWhitneyParameters {
    /**
     * Build parameters.
    
     * @param dset1_x Data set for X observations. Must specify 1 and only 1 sub-brick.
     * @param dset2_y Data set for Y observations. Must specify 1 and only 1 sub-brick.
     * @param output_prefix Estimated population delta and Wilcoxon-Mann-Whitney statistics written to file.
     * @param workmem Number of megabytes of RAM to use for statistical workspace.
     * @param voxel_num Screen output for voxel # num.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dMannWhitney" as const,
        "dset1_x": dset1_x,
        "dset2_y": dset2_y,
        "output_prefix": output_prefix,
    };
    if (workmem !== null) {
        params["workmem"] = workmem;
    }
    if (voxel_num !== null) {
        params["voxel_num"] = voxel_num;
    }
    return params;
}


function v_3d_mann_whitney_cargs(
    params: V3dMannWhitneyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dMannWhitney");
    cargs.push(
        "-dset 1",
        ...(params["dset1_x"] ?? null)
    );
    cargs.push(
        "-dset 2",
        ...(params["dset2_y"] ?? null)
    );
    cargs.push(
        "-out",
        (params["output_prefix"] ?? null)
    );
    if ((params["workmem"] ?? null) !== null) {
        cargs.push(
            "-workmem",
            String((params["workmem"] ?? null))
        );
    }
    if ((params["voxel_num"] ?? null) !== null) {
        cargs.push(
            "-voxel",
            String((params["voxel_num"] ?? null))
        );
    }
    return cargs;
}


function v_3d_mann_whitney_outputs(
    params: V3dMannWhitneyParameters,
    execution: Execution,
): V3dMannWhitneyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dMannWhitneyOutputs = {
        root: execution.outputFile("."),
        output_files: execution.outputFile([(params["output_prefix"] ?? null), "*"].join('')),
    };
    return ret;
}


function v_3d_mann_whitney_execute(
    params: V3dMannWhitneyParameters,
    execution: Execution,
): V3dMannWhitneyOutputs {
    /**
     * Performs nonparametric Mann-Whitney two-sample test.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dMannWhitneyOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_mann_whitney_cargs(params, execution)
    const ret = v_3d_mann_whitney_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_mann_whitney(
    dset1_x: Array<string>,
    dset2_y: Array<string>,
    output_prefix: string,
    workmem: number | null = null,
    voxel_num: number | null = null,
    runner: Runner | null = null,
): V3dMannWhitneyOutputs {
    /**
     * Performs nonparametric Mann-Whitney two-sample test.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dset1_x Data set for X observations. Must specify 1 and only 1 sub-brick.
     * @param dset2_y Data set for Y observations. Must specify 1 and only 1 sub-brick.
     * @param output_prefix Estimated population delta and Wilcoxon-Mann-Whitney statistics written to file.
     * @param workmem Number of megabytes of RAM to use for statistical workspace.
     * @param voxel_num Screen output for voxel # num.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dMannWhitneyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_MANN_WHITNEY_METADATA);
    const params = v_3d_mann_whitney_params(dset1_x, dset2_y, output_prefix, workmem, voxel_num)
    return v_3d_mann_whitney_execute(params, execution);
}


export {
      V3dMannWhitneyOutputs,
      V3dMannWhitneyParameters,
      V_3D_MANN_WHITNEY_METADATA,
      v_3d_mann_whitney,
      v_3d_mann_whitney_params,
};
