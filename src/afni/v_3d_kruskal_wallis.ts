// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_KRUSKAL_WALLIS_METADATA: Metadata = {
    id: "317079b0dac4061070175eb508c808dec48b1852.boutiques",
    name: "3dKruskalWallis",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dKruskalWallisParameters {
    "__STYXTYPE__": "3dKruskalWallis";
    "levels": number;
    "datasets": Array<string>;
    "workmem"?: number | null | undefined;
    "voxel"?: number | null | undefined;
    "output": string;
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
        "3dKruskalWallis": v_3d_kruskal_wallis_cargs,
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
        "3dKruskalWallis": v_3d_kruskal_wallis_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_kruskal_wallis(...)`.
 *
 * @interface
 */
interface V3dKruskalWallisOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing Kruskal-Wallis statistics
     */
    outfile_prefix: OutputPathType;
}


function v_3d_kruskal_wallis_params(
    levels: number,
    datasets: Array<string>,
    output: string,
    workmem: number | null = null,
    voxel: number | null = null,
): V3dKruskalWallisParameters {
    /**
     * Build parameters.
    
     * @param levels Number of treatments
     * @param datasets Data set for treatment #1 through to treatment #s. Specify sub-brick if more than one present.
     * @param output Kruskal-Wallis statistics are written to file prefixname
     * @param workmem Number of megabytes of RAM to use for statistical workspace
     * @param voxel Screen output for voxel # num
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dKruskalWallis" as const,
        "levels": levels,
        "datasets": datasets,
        "output": output,
    };
    if (workmem !== null) {
        params["workmem"] = workmem;
    }
    if (voxel !== null) {
        params["voxel"] = voxel;
    }
    return params;
}


function v_3d_kruskal_wallis_cargs(
    params: V3dKruskalWallisParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dKruskalWallis");
    cargs.push(
        "-levels",
        String((params["levels"] ?? null))
    );
    cargs.push(
        "-dset",
        ...(params["datasets"] ?? null)
    );
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
    cargs.push(
        "-out",
        (params["output"] ?? null)
    );
    return cargs;
}


function v_3d_kruskal_wallis_outputs(
    params: V3dKruskalWallisParameters,
    execution: Execution,
): V3dKruskalWallisOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dKruskalWallisOutputs = {
        root: execution.outputFile("."),
        outfile_prefix: execution.outputFile([(params["output"] ?? null), "+tlrc"].join('')),
    };
    return ret;
}


function v_3d_kruskal_wallis_execute(
    params: V3dKruskalWallisParameters,
    execution: Execution,
): V3dKruskalWallisOutputs {
    /**
     * This program performs nonparametric Kruskal-Wallis test for comparison of multiple treatments.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dKruskalWallisOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_kruskal_wallis_cargs(params, execution)
    const ret = v_3d_kruskal_wallis_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_kruskal_wallis(
    levels: number,
    datasets: Array<string>,
    output: string,
    workmem: number | null = null,
    voxel: number | null = null,
    runner: Runner | null = null,
): V3dKruskalWallisOutputs {
    /**
     * This program performs nonparametric Kruskal-Wallis test for comparison of multiple treatments.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param levels Number of treatments
     * @param datasets Data set for treatment #1 through to treatment #s. Specify sub-brick if more than one present.
     * @param output Kruskal-Wallis statistics are written to file prefixname
     * @param workmem Number of megabytes of RAM to use for statistical workspace
     * @param voxel Screen output for voxel # num
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dKruskalWallisOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_KRUSKAL_WALLIS_METADATA);
    const params = v_3d_kruskal_wallis_params(levels, datasets, output, workmem, voxel)
    return v_3d_kruskal_wallis_execute(params, execution);
}


export {
      V3dKruskalWallisOutputs,
      V3dKruskalWallisParameters,
      V_3D_KRUSKAL_WALLIS_METADATA,
      v_3d_kruskal_wallis,
      v_3d_kruskal_wallis_params,
};
