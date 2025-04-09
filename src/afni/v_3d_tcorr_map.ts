// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TCORR_MAP_METADATA: Metadata = {
    id: "79957a8f35e2ff51be99a6621ee7fe05bd18188e.boutiques",
    name: "3dTcorrMap",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTcorrMapParameters {
    "__STYXTYPE__": "3dTcorrMap";
    "input": InputPathType;
    "seed"?: InputPathType | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "automask": boolean;
    "mean"?: string | null | undefined;
    "zmean"?: string | null | undefined;
    "qmean"?: string | null | undefined;
    "pmean"?: string | null | undefined;
    "thresh"?: string | null | undefined;
    "varthresh"?: string | null | undefined;
    "norm_varthresh"?: string | null | undefined;
    "corrmap"?: string | null | undefined;
    "corrmask": boolean;
    "aexpr"?: string | null | undefined;
    "cexpr"?: string | null | undefined;
    "sexpr"?: string | null | undefined;
    "hist"?: string | null | undefined;
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
        "3dTcorrMap": v_3d_tcorr_map_cargs,
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
 * Output object returned when calling `v_3d_tcorr_map(...)`.
 *
 * @interface
 */
interface V3dTcorrMapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_tcorr_map_params(
    input: InputPathType,
    seed: InputPathType | null = null,
    mask: InputPathType | null = null,
    automask: boolean = false,
    mean: string | null = null,
    zmean: string | null = null,
    qmean: string | null = null,
    pmean: string | null = null,
    thresh: string | null = null,
    varthresh: string | null = null,
    norm_varthresh: string | null = null,
    corrmap: string | null = null,
    corrmask: boolean = false,
    aexpr: string | null = null,
    cexpr: string | null = null,
    sexpr: string | null = null,
    hist: string | null = null,
): V3dTcorrMapParameters {
    /**
     * Build parameters.
    
     * @param input Read 3D+time dataset 'dd'. This provides the time series to be correlated en masse. This is a mandatory option.
     * @param seed Read 3D+time dataset 'bb'. It correlates the -seed voxel time series with every voxel in the -input dataset.
     * @param mask Read dataset 'mmm' as a voxel mask.
     * @param automask Create a mask from the input dataset.
     * @param mean Save average correlations into dataset prefix 'pp'.
     * @param zmean Save tanh of mean arctanh(correlation) into 'pp'.
     * @param qmean Save RMS(correlation) into 'pp'.
     * @param pmean Save average of squared positive correlations into 'pp'.
     * @param thresh Save the COUNT of how many voxels survived thresholding at level abs(correlation) >= tt.
     * @param varthresh Save the COUNT of how many voxels survive thresholding at multiple levels abs(correlation) >= tt.
     * @param norm_varthresh Like '-VarThresh', but the output counts are 'Normalized'.
     * @param corrmap Output at each voxel the entire correlation map, into a dataset with prefix 'pp'.
     * @param corrmask By default, -CorrMap outputs a sub-brick for EACH input dataset voxel. Eliminates these sub-bricks using this option.
     * @param aexpr For each correlation 'r', compute the calc-style expression 'expr', and average these values to get the output that goes into dataset 'ppp'.
     * @param cexpr As in '-Aexpr', but only average together nonzero values computed by 'expr'.
     * @param sexpr As above, but the sum of the expressions is computed rather than the average.
     * @param hist For each voxel, save a histogram of the correlation coefficients into dataset ppp.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTcorrMap" as const,
        "input": input,
        "automask": automask,
        "corrmask": corrmask,
    };
    if (seed !== null) {
        params["seed"] = seed;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (mean !== null) {
        params["mean"] = mean;
    }
    if (zmean !== null) {
        params["zmean"] = zmean;
    }
    if (qmean !== null) {
        params["qmean"] = qmean;
    }
    if (pmean !== null) {
        params["pmean"] = pmean;
    }
    if (thresh !== null) {
        params["thresh"] = thresh;
    }
    if (varthresh !== null) {
        params["varthresh"] = varthresh;
    }
    if (norm_varthresh !== null) {
        params["norm_varthresh"] = norm_varthresh;
    }
    if (corrmap !== null) {
        params["corrmap"] = corrmap;
    }
    if (aexpr !== null) {
        params["aexpr"] = aexpr;
    }
    if (cexpr !== null) {
        params["cexpr"] = cexpr;
    }
    if (sexpr !== null) {
        params["sexpr"] = sexpr;
    }
    if (hist !== null) {
        params["hist"] = hist;
    }
    return params;
}


function v_3d_tcorr_map_cargs(
    params: V3dTcorrMapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTcorrMap");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "-seed",
            execution.inputFile((params["seed"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["mean"] ?? null) !== null) {
        cargs.push(
            "-Mean",
            (params["mean"] ?? null)
        );
    }
    if ((params["zmean"] ?? null) !== null) {
        cargs.push(
            "-Zmean",
            (params["zmean"] ?? null)
        );
    }
    if ((params["qmean"] ?? null) !== null) {
        cargs.push(
            "-Qmean",
            (params["qmean"] ?? null)
        );
    }
    if ((params["pmean"] ?? null) !== null) {
        cargs.push(
            "-Pmean",
            (params["pmean"] ?? null)
        );
    }
    if ((params["thresh"] ?? null) !== null) {
        cargs.push(
            "-Thresh",
            (params["thresh"] ?? null)
        );
    }
    if ((params["varthresh"] ?? null) !== null) {
        cargs.push(
            "-VarThresh",
            (params["varthresh"] ?? null)
        );
    }
    if ((params["norm_varthresh"] ?? null) !== null) {
        cargs.push(
            "-VarThreshN",
            (params["norm_varthresh"] ?? null)
        );
    }
    if ((params["corrmap"] ?? null) !== null) {
        cargs.push(
            "-CorrMap",
            (params["corrmap"] ?? null)
        );
    }
    if ((params["corrmask"] ?? null)) {
        cargs.push("-CorrMask");
    }
    if ((params["aexpr"] ?? null) !== null) {
        cargs.push(
            "-Aexpr",
            (params["aexpr"] ?? null)
        );
    }
    if ((params["cexpr"] ?? null) !== null) {
        cargs.push(
            "-Cexpr",
            (params["cexpr"] ?? null)
        );
    }
    if ((params["sexpr"] ?? null) !== null) {
        cargs.push(
            "-Sexpr",
            (params["sexpr"] ?? null)
        );
    }
    if ((params["hist"] ?? null) !== null) {
        cargs.push(
            "-Hist",
            (params["hist"] ?? null)
        );
    }
    return cargs;
}


function v_3d_tcorr_map_outputs(
    params: V3dTcorrMapParameters,
    execution: Execution,
): V3dTcorrMapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTcorrMapOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_tcorr_map_execute(
    params: V3dTcorrMapParameters,
    execution: Execution,
): V3dTcorrMapOutputs {
    /**
     * AFNI program to compute correlation maps of input time series data.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTcorrMapOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_tcorr_map_cargs(params, execution)
    const ret = v_3d_tcorr_map_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_tcorr_map(
    input: InputPathType,
    seed: InputPathType | null = null,
    mask: InputPathType | null = null,
    automask: boolean = false,
    mean: string | null = null,
    zmean: string | null = null,
    qmean: string | null = null,
    pmean: string | null = null,
    thresh: string | null = null,
    varthresh: string | null = null,
    norm_varthresh: string | null = null,
    corrmap: string | null = null,
    corrmask: boolean = false,
    aexpr: string | null = null,
    cexpr: string | null = null,
    sexpr: string | null = null,
    hist: string | null = null,
    runner: Runner | null = null,
): V3dTcorrMapOutputs {
    /**
     * AFNI program to compute correlation maps of input time series data.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input Read 3D+time dataset 'dd'. This provides the time series to be correlated en masse. This is a mandatory option.
     * @param seed Read 3D+time dataset 'bb'. It correlates the -seed voxel time series with every voxel in the -input dataset.
     * @param mask Read dataset 'mmm' as a voxel mask.
     * @param automask Create a mask from the input dataset.
     * @param mean Save average correlations into dataset prefix 'pp'.
     * @param zmean Save tanh of mean arctanh(correlation) into 'pp'.
     * @param qmean Save RMS(correlation) into 'pp'.
     * @param pmean Save average of squared positive correlations into 'pp'.
     * @param thresh Save the COUNT of how many voxels survived thresholding at level abs(correlation) >= tt.
     * @param varthresh Save the COUNT of how many voxels survive thresholding at multiple levels abs(correlation) >= tt.
     * @param norm_varthresh Like '-VarThresh', but the output counts are 'Normalized'.
     * @param corrmap Output at each voxel the entire correlation map, into a dataset with prefix 'pp'.
     * @param corrmask By default, -CorrMap outputs a sub-brick for EACH input dataset voxel. Eliminates these sub-bricks using this option.
     * @param aexpr For each correlation 'r', compute the calc-style expression 'expr', and average these values to get the output that goes into dataset 'ppp'.
     * @param cexpr As in '-Aexpr', but only average together nonzero values computed by 'expr'.
     * @param sexpr As above, but the sum of the expressions is computed rather than the average.
     * @param hist For each voxel, save a histogram of the correlation coefficients into dataset ppp.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTcorrMapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TCORR_MAP_METADATA);
    const params = v_3d_tcorr_map_params(input, seed, mask, automask, mean, zmean, qmean, pmean, thresh, varthresh, norm_varthresh, corrmap, corrmask, aexpr, cexpr, sexpr, hist)
    return v_3d_tcorr_map_execute(params, execution);
}


export {
      V3dTcorrMapOutputs,
      V3dTcorrMapParameters,
      V_3D_TCORR_MAP_METADATA,
      v_3d_tcorr_map,
      v_3d_tcorr_map_params,
};
