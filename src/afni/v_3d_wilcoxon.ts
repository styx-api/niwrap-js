// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_WILCOXON_METADATA: Metadata = {
    id: "463bd0c7f172cd1b8be0a6f1adaeefb51a0010ea.boutiques",
    name: "3dWilcoxon",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dWilcoxonParameters {
    "__STYXTYPE__": "3dWilcoxon";
    "workmem"?: number | null | undefined;
    "voxel"?: number | null | undefined;
    "dset1_x": Array<InputPathType>;
    "dset2_y": Array<InputPathType>;
    "output_prefix": string;
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
        "3dWilcoxon": v_3d_wilcoxon_cargs,
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
        "3dWilcoxon": v_3d_wilcoxon_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_wilcoxon(...)`.
 *
 * @interface
 */
interface V3dWilcoxonOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Estimated population delta and Wilcoxon signed-rank statistics
     */
    output_file: OutputPathType;
}


function v_3d_wilcoxon_params(
    dset1_x: Array<InputPathType>,
    dset2_y: Array<InputPathType>,
    output_prefix: string,
    workmem: number | null = null,
    voxel: number | null = null,
): V3dWilcoxonParameters {
    /**
     * Build parameters.
    
     * @param dset1_x Data set for X observations. The user must specify 1 and only 1 sub-brick with each -dset command.
     * @param dset2_y Data set for Y observations. The user must specify 1 and only 1 sub-brick with each -dset command.
     * @param output_prefix Estimated population delta and Wilcoxon signed-rank statistics are written to file
     * @param workmem Number of megabytes of RAM to use for statistical workspace
     * @param voxel Screen output for voxel # num
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dWilcoxon" as const,
        "dset1_x": dset1_x,
        "dset2_y": dset2_y,
        "output_prefix": output_prefix,
    };
    if (workmem !== null) {
        params["workmem"] = workmem;
    }
    if (voxel !== null) {
        params["voxel"] = voxel;
    }
    return params;
}


function v_3d_wilcoxon_cargs(
    params: V3dWilcoxonParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dWilcoxon");
    if ((params["workmem"] ?? null) !== null) {
        cargs.push(
            "-workmem",
            String((params["workmem"] ?? null))
        );
    }
    if ((params["voxel"] ?? null) !== null) {
        cargs.push(
            "-voxel",
            String((params["voxel"] ?? null))
        );
    }
    cargs.push("-dset");
    cargs.push("1");
    cargs.push(...(params["dset1_x"] ?? null).map(f => execution.inputFile(f)));
    cargs.push("-dset");
    cargs.push("2");
    cargs.push(...(params["dset2_y"] ?? null).map(f => execution.inputFile(f)));
    cargs.push(
        "-out",
        (params["output_prefix"] ?? null)
    );
    return cargs;
}


function v_3d_wilcoxon_outputs(
    params: V3dWilcoxonParameters,
    execution: Execution,
): V3dWilcoxonOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dWilcoxonOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_prefix"] ?? null)].join('')),
    };
    return ret;
}


function v_3d_wilcoxon_execute(
    params: V3dWilcoxonParameters,
    execution: Execution,
): V3dWilcoxonOutputs {
    /**
     * Nonparametric Wilcoxon signed-rank test for paired comparisons of two samples.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dWilcoxonOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_wilcoxon_cargs(params, execution)
    const ret = v_3d_wilcoxon_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_wilcoxon(
    dset1_x: Array<InputPathType>,
    dset2_y: Array<InputPathType>,
    output_prefix: string,
    workmem: number | null = null,
    voxel: number | null = null,
    runner: Runner | null = null,
): V3dWilcoxonOutputs {
    /**
     * Nonparametric Wilcoxon signed-rank test for paired comparisons of two samples.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dset1_x Data set for X observations. The user must specify 1 and only 1 sub-brick with each -dset command.
     * @param dset2_y Data set for Y observations. The user must specify 1 and only 1 sub-brick with each -dset command.
     * @param output_prefix Estimated population delta and Wilcoxon signed-rank statistics are written to file
     * @param workmem Number of megabytes of RAM to use for statistical workspace
     * @param voxel Screen output for voxel # num
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dWilcoxonOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_WILCOXON_METADATA);
    const params = v_3d_wilcoxon_params(dset1_x, dset2_y, output_prefix, workmem, voxel)
    return v_3d_wilcoxon_execute(params, execution);
}


export {
      V3dWilcoxonOutputs,
      V3dWilcoxonParameters,
      V_3D_WILCOXON_METADATA,
      v_3d_wilcoxon,
      v_3d_wilcoxon_params,
};
