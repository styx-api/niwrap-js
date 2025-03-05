// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TCORR1_D_METADATA: Metadata = {
    id: "db33094375d3e7131beda2ef599c6bd0761a7d75.boutiques",
    name: "3dTcorr1D",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTcorr1DParameters {
    "__STYXTYPE__": "3dTcorr1D";
    "ktaub": boolean;
    "num_threads"?: number | null | undefined;
    "outputtype"?: "NIFTI" | "AFNI" | "NIFTI_GZ" | null | undefined;
    "pearson": boolean;
    "quadrant": boolean;
    "spearman": boolean;
    "xset": InputPathType;
    "y_1d": InputPathType;
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
        "3dTcorr1D": v_3d_tcorr1_d_cargs,
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
        "3dTcorr1D": v_3d_tcorr1_d_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_tcorr1_d(...)`.
 *
 * @interface
 */
interface V3dTcorr1DOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output filename prefix.
     */
    out_file: OutputPathType;
    /**
     * Output file containing correlations.
     */
    out_file_: OutputPathType;
}


function v_3d_tcorr1_d_params(
    xset: InputPathType,
    y_1d: InputPathType,
    ktaub: boolean = false,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    pearson: boolean = false,
    quadrant: boolean = false,
    spearman: boolean = false,
): V3dTcorr1DParameters {
    /**
     * Build parameters.
    
     * @param xset 3d+time dataset input.
     * @param y_1d 1d time series file input.
     * @param ktaub Correlation is the kendall's tau_b correlation coefficient.
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param pearson Correlation is the normal pearson correlation coefficient.
     * @param quadrant Correlation is the quadrant correlation coefficient.
     * @param spearman Correlation is the spearman (rank) correlation coefficient.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTcorr1D" as const,
        "ktaub": ktaub,
        "pearson": pearson,
        "quadrant": quadrant,
        "spearman": spearman,
        "xset": xset,
        "y_1d": y_1d,
    };
    if (num_threads !== null) {
        params["num_threads"] = num_threads;
    }
    if (outputtype !== null) {
        params["outputtype"] = outputtype;
    }
    return params;
}


function v_3d_tcorr1_d_cargs(
    params: V3dTcorr1DParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTcorr1D");
    if ((params["ktaub"] ?? null)) {
        cargs.push("-ktaub");
    }
    if ((params["num_threads"] ?? null) !== null) {
        cargs.push(String((params["num_threads"] ?? null)));
    }
    if ((params["outputtype"] ?? null) !== null) {
        cargs.push((params["outputtype"] ?? null));
    }
    if ((params["pearson"] ?? null)) {
        cargs.push("-pearson");
    }
    if ((params["quadrant"] ?? null)) {
        cargs.push("-quadrant");
    }
    if ((params["spearman"] ?? null)) {
        cargs.push(["-spearman", execution.inputFile((params["xset"] ?? null)), execution.inputFile((params["y_1d"] ?? null))].join(''));
    }
    return cargs;
}


function v_3d_tcorr1_d_outputs(
    params: V3dTcorr1DParameters,
    execution: Execution,
): V3dTcorr1DOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTcorr1DOutputs = {
        root: execution.outputFile("."),
        out_file: execution.outputFile([path.basename((params["xset"] ?? null)), "_correlation.nii.gz"].join('')),
        out_file_: execution.outputFile(["out_file"].join('')),
    };
    return ret;
}


function v_3d_tcorr1_d_execute(
    params: V3dTcorr1DParameters,
    execution: Execution,
): V3dTcorr1DOutputs {
    /**
     * Computes the correlation coefficient between each voxel time series in the input 3D+time dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTcorr1DOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_tcorr1_d_cargs(params, execution)
    const ret = v_3d_tcorr1_d_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_tcorr1_d(
    xset: InputPathType,
    y_1d: InputPathType,
    ktaub: boolean = false,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    pearson: boolean = false,
    quadrant: boolean = false,
    spearman: boolean = false,
    runner: Runner | null = null,
): V3dTcorr1DOutputs {
    /**
     * Computes the correlation coefficient between each voxel time series in the input 3D+time dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param xset 3d+time dataset input.
     * @param y_1d 1d time series file input.
     * @param ktaub Correlation is the kendall's tau_b correlation coefficient.
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param pearson Correlation is the normal pearson correlation coefficient.
     * @param quadrant Correlation is the quadrant correlation coefficient.
     * @param spearman Correlation is the spearman (rank) correlation coefficient.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTcorr1DOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TCORR1_D_METADATA);
    const params = v_3d_tcorr1_d_params(xset, y_1d, ktaub, num_threads, outputtype, pearson, quadrant, spearman)
    return v_3d_tcorr1_d_execute(params, execution);
}


export {
      V3dTcorr1DOutputs,
      V3dTcorr1DParameters,
      V_3D_TCORR1_D_METADATA,
      v_3d_tcorr1_d,
      v_3d_tcorr1_d_params,
};
