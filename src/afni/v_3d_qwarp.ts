// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_QWARP_METADATA: Metadata = {
    id: "cc213324798c478d3e72e48a943b6932f8735e9d.boutiques",
    name: "3dQwarp",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dQwarpParameters {
    "__STYXTYPE__": "3dQwarp";
    "base_dataset": InputPathType;
    "source_dataset": InputPathType;
    "prefix": string;
    "no_warp": boolean;
    "inverse_warp": boolean;
    "no_dataset": boolean;
    "a_warp": boolean;
    "pcl": boolean;
    "pear": boolean;
    "hel": boolean;
    "mi": boolean;
    "nmi": boolean;
    "lpc": boolean;
    "lpa": boolean;
    "noneg": boolean;
    "nopenalty": boolean;
    "minpatch"?: number | null | undefined;
    "maxlev"?: number | null | undefined;
    "verbose": boolean;
    "quiet": boolean;
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
        "3dQwarp": v_3d_qwarp_cargs,
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
        "3dQwarp": v_3d_qwarp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_qwarp(...)`.
 *
 * @interface
 */
interface V3dQwarpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Warped dataset
     */
    warped_dataset: OutputPathType;
    /**
     * Warp dataset
     */
    warp_dataset: OutputPathType;
    /**
     * Inverse warp dataset
     */
    inverse_warp_dataset: OutputPathType;
}


function v_3d_qwarp_params(
    base_dataset: InputPathType,
    source_dataset: InputPathType,
    prefix: string,
    no_warp: boolean = false,
    inverse_warp: boolean = false,
    no_dataset: boolean = false,
    a_warp: boolean = false,
    pcl: boolean = false,
    pear: boolean = false,
    hel: boolean = false,
    mi: boolean = false,
    nmi: boolean = false,
    lpc: boolean = false,
    lpa: boolean = false,
    noneg: boolean = false,
    nopenalty: boolean = false,
    minpatch: number | null = null,
    maxlev: number | null = null,
    verbose: boolean = false,
    quiet: boolean = false,
): V3dQwarpParameters {
    /**
     * Build parameters.
    
     * @param base_dataset Base dataset
     * @param source_dataset Source dataset
     * @param prefix Prefix for the output datasets
     * @param no_warp Do not save the _WARP file
     * @param inverse_warp Compute and save the _WARPINV file
     * @param no_dataset Do not save the warped source dataset
     * @param a_warp Output the nonlinear warp when -allineate is used
     * @param pcl Clipped Pearson correlation (default method)
     * @param pear Use strict Pearson correlation for matching
     * @param hel Use Hellinger metric for matching
     * @param mi Use Mutual Information for matching
     * @param nmi Use Normalized Mutual Information for matching
     * @param lpc Use Local Pearson correlation (signed) for matching
     * @param lpa Use Local Pearson correlation (absolute value) for matching
     * @param noneg Replace negative values in either input volume with 0
     * @param nopenalty Don't use a penalty on the cost functional
     * @param minpatch Set the minimum patch size for warp searching
     * @param maxlev Set the maximum refinement level
     * @param verbose Print out very verbose progress messages
     * @param quiet Cut out most progress messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dQwarp" as const,
        "base_dataset": base_dataset,
        "source_dataset": source_dataset,
        "prefix": prefix,
        "no_warp": no_warp,
        "inverse_warp": inverse_warp,
        "no_dataset": no_dataset,
        "a_warp": a_warp,
        "pcl": pcl,
        "pear": pear,
        "hel": hel,
        "mi": mi,
        "nmi": nmi,
        "lpc": lpc,
        "lpa": lpa,
        "noneg": noneg,
        "nopenalty": nopenalty,
        "verbose": verbose,
        "quiet": quiet,
    };
    if (minpatch !== null) {
        params["minpatch"] = minpatch;
    }
    if (maxlev !== null) {
        params["maxlev"] = maxlev;
    }
    return params;
}


function v_3d_qwarp_cargs(
    params: V3dQwarpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dQwarp");
    cargs.push(execution.inputFile((params["base_dataset"] ?? null)));
    cargs.push(execution.inputFile((params["source_dataset"] ?? null)));
    cargs.push((params["prefix"] ?? null));
    if ((params["no_warp"] ?? null)) {
        cargs.push("-nowarp");
    }
    if ((params["inverse_warp"] ?? null)) {
        cargs.push("-iwarp");
    }
    if ((params["no_dataset"] ?? null)) {
        cargs.push("-nodset");
    }
    if ((params["a_warp"] ?? null)) {
        cargs.push("-awarp");
    }
    if ((params["pcl"] ?? null)) {
        cargs.push("-pcl");
    }
    if ((params["pear"] ?? null)) {
        cargs.push("-pear");
    }
    if ((params["hel"] ?? null)) {
        cargs.push("-hel");
    }
    if ((params["mi"] ?? null)) {
        cargs.push("-mi");
    }
    if ((params["nmi"] ?? null)) {
        cargs.push("-nmi");
    }
    if ((params["lpc"] ?? null)) {
        cargs.push("-lpc");
    }
    if ((params["lpa"] ?? null)) {
        cargs.push("-lpa");
    }
    if ((params["noneg"] ?? null)) {
        cargs.push("-noneg");
    }
    if ((params["nopenalty"] ?? null)) {
        cargs.push("-nopenalty");
    }
    if ((params["minpatch"] ?? null) !== null) {
        cargs.push(
            "-minpatch",
            String((params["minpatch"] ?? null))
        );
    }
    if ((params["maxlev"] ?? null) !== null) {
        cargs.push(
            "-maxlev",
            String((params["maxlev"] ?? null))
        );
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    return cargs;
}


function v_3d_qwarp_outputs(
    params: V3dQwarpParameters,
    execution: Execution,
): V3dQwarpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dQwarpOutputs = {
        root: execution.outputFile("."),
        warped_dataset: execution.outputFile(["{PREFIX}+tlrc"].join('')),
        warp_dataset: execution.outputFile(["{PREFIX}_WARP+tlrc"].join('')),
        inverse_warp_dataset: execution.outputFile(["{PREFIX}_WARPINV+tlrc"].join('')),
    };
    return ret;
}


function v_3d_qwarp_execute(
    params: V3dQwarpParameters,
    execution: Execution,
): V3dQwarpOutputs {
    /**
     * Computes a nonlinearly warped version of source_dataset to match base_dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dQwarpOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_qwarp_cargs(params, execution)
    const ret = v_3d_qwarp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_qwarp(
    base_dataset: InputPathType,
    source_dataset: InputPathType,
    prefix: string,
    no_warp: boolean = false,
    inverse_warp: boolean = false,
    no_dataset: boolean = false,
    a_warp: boolean = false,
    pcl: boolean = false,
    pear: boolean = false,
    hel: boolean = false,
    mi: boolean = false,
    nmi: boolean = false,
    lpc: boolean = false,
    lpa: boolean = false,
    noneg: boolean = false,
    nopenalty: boolean = false,
    minpatch: number | null = null,
    maxlev: number | null = null,
    verbose: boolean = false,
    quiet: boolean = false,
    runner: Runner | null = null,
): V3dQwarpOutputs {
    /**
     * Computes a nonlinearly warped version of source_dataset to match base_dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param base_dataset Base dataset
     * @param source_dataset Source dataset
     * @param prefix Prefix for the output datasets
     * @param no_warp Do not save the _WARP file
     * @param inverse_warp Compute and save the _WARPINV file
     * @param no_dataset Do not save the warped source dataset
     * @param a_warp Output the nonlinear warp when -allineate is used
     * @param pcl Clipped Pearson correlation (default method)
     * @param pear Use strict Pearson correlation for matching
     * @param hel Use Hellinger metric for matching
     * @param mi Use Mutual Information for matching
     * @param nmi Use Normalized Mutual Information for matching
     * @param lpc Use Local Pearson correlation (signed) for matching
     * @param lpa Use Local Pearson correlation (absolute value) for matching
     * @param noneg Replace negative values in either input volume with 0
     * @param nopenalty Don't use a penalty on the cost functional
     * @param minpatch Set the minimum patch size for warp searching
     * @param maxlev Set the maximum refinement level
     * @param verbose Print out very verbose progress messages
     * @param quiet Cut out most progress messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dQwarpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_QWARP_METADATA);
    const params = v_3d_qwarp_params(base_dataset, source_dataset, prefix, no_warp, inverse_warp, no_dataset, a_warp, pcl, pear, hel, mi, nmi, lpc, lpa, noneg, nopenalty, minpatch, maxlev, verbose, quiet)
    return v_3d_qwarp_execute(params, execution);
}


export {
      V3dQwarpOutputs,
      V3dQwarpParameters,
      V_3D_QWARP_METADATA,
      v_3d_qwarp,
      v_3d_qwarp_params,
};
