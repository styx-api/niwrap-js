// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_RETINO_PHASE_METADATA: Metadata = {
    id: "2d3b9af035089d0168b16f53cd54b736189187db.boutiques",
    name: "3dRetinoPhase",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dRetinoPhaseParameters {
    "__STYXTYPE__": "3dRetinoPhase";
    "prefix": string;
    "dataset": InputPathType;
    "exp"?: string | null | undefined;
    "con"?: string | null | undefined;
    "clw"?: string | null | undefined;
    "ccw"?: string | null | undefined;
    "spectra": boolean;
    "tstim"?: number | null | undefined;
    "nrings"?: number | null | undefined;
    "nwedges"?: number | null | undefined;
    "ort_adjust"?: number | null | undefined;
    "pre_stim"?: number | null | undefined;
    "sum_adjust"?: string | null | undefined;
    "phase_estimate"?: string | null | undefined;
    "ref_ts"?: InputPathType | null | undefined;
    "multi_ref_ts"?: InputPathType | null | undefined;
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
        "3dRetinoPhase": v_3d_retino_phase_cargs,
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
        "3dRetinoPhase": v_3d_retino_phase_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_retino_phase(...)`.
 *
 * @interface
 */
interface V3dRetinoPhaseOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file for positive (expanding) eccentricity
     */
    ecc_plus: OutputPathType;
    /**
     * Output file for negative (contracting) eccentricity
     */
    ecc_minus: OutputPathType;
    /**
     * Output file for clockwise polar angle mapping
     */
    pol_plus: OutputPathType;
    /**
     * Output file for counterclockwise polar angle mapping
     */
    pol_minus: OutputPathType;
}


function v_3d_retino_phase_params(
    prefix: string,
    dataset: InputPathType,
    exp: string | null = null,
    con: string | null = null,
    clw: string | null = null,
    ccw: string | null = null,
    spectra: boolean = false,
    tstim: number | null = null,
    nrings: number | null = null,
    nwedges: number | null = null,
    ort_adjust: number | null = null,
    pre_stim: number | null = null,
    sum_adjust: string | null = null,
    phase_estimate: string | null = null,
    ref_ts: InputPathType | null = null,
    multi_ref_ts: InputPathType | null = null,
): V3dRetinoPhaseParameters {
    /**
     * Build parameters.
    
     * @param prefix Prefix of output datasets.
     * @param dataset Time series from a retinotopy stimulus.
     * @param exp Expanding rings stimulus.
     * @param con Contracting rings stimulus.
     * @param clw Clockwise moving polar angle mapping stimulus.
     * @param ccw Counterclockwise moving polar angle mapping stimulus.
     * @param spectra Output amplitude and phase spectra datasets.
     * @param tstim Period of stimulus in seconds.
     * @param nrings Number of rings in the stimulus. Default is 1.
     * @param nwedges Number of wedges in the stimulus. Default is 1.
     * @param ort_adjust Number of DOF lost in detrending outside of this program.
     * @param pre_stim Blank period, in seconds, before stimulus began.
     * @param sum_adjust Adjust sum of angles for wrapping based on the angle difference. Default is 'y'.
     * @param phase_estimate Method of phase estimation.
     * @param ref_ts 0 lag reference time series of response for DELAY phase estimation method.
     * @param multi_ref_ts Multiple 0 lag reference time series. This allows you to test multiple regressors.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dRetinoPhase" as const,
        "prefix": prefix,
        "dataset": dataset,
        "spectra": spectra,
    };
    if (exp !== null) {
        params["exp"] = exp;
    }
    if (con !== null) {
        params["con"] = con;
    }
    if (clw !== null) {
        params["clw"] = clw;
    }
    if (ccw !== null) {
        params["ccw"] = ccw;
    }
    if (tstim !== null) {
        params["tstim"] = tstim;
    }
    if (nrings !== null) {
        params["nrings"] = nrings;
    }
    if (nwedges !== null) {
        params["nwedges"] = nwedges;
    }
    if (ort_adjust !== null) {
        params["ort_adjust"] = ort_adjust;
    }
    if (pre_stim !== null) {
        params["pre_stim"] = pre_stim;
    }
    if (sum_adjust !== null) {
        params["sum_adjust"] = sum_adjust;
    }
    if (phase_estimate !== null) {
        params["phase_estimate"] = phase_estimate;
    }
    if (ref_ts !== null) {
        params["ref_ts"] = ref_ts;
    }
    if (multi_ref_ts !== null) {
        params["multi_ref_ts"] = multi_ref_ts;
    }
    return params;
}


function v_3d_retino_phase_cargs(
    params: V3dRetinoPhaseParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dRetinoPhase");
    cargs.push((params["prefix"] ?? null));
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["exp"] ?? null) !== null) {
        cargs.push(
            "-exp",
            (params["exp"] ?? null)
        );
    }
    if ((params["con"] ?? null) !== null) {
        cargs.push(
            "-con",
            (params["con"] ?? null)
        );
    }
    if ((params["clw"] ?? null) !== null) {
        cargs.push(
            "-clw",
            (params["clw"] ?? null)
        );
    }
    if ((params["ccw"] ?? null) !== null) {
        cargs.push(
            "-ccw",
            (params["ccw"] ?? null)
        );
    }
    if ((params["spectra"] ?? null)) {
        cargs.push("-spectra");
    }
    if ((params["tstim"] ?? null) !== null) {
        cargs.push(
            "-Tstim",
            String((params["tstim"] ?? null))
        );
    }
    if ((params["nrings"] ?? null) !== null) {
        cargs.push(
            "-nrings",
            String((params["nrings"] ?? null))
        );
    }
    if ((params["nwedges"] ?? null) !== null) {
        cargs.push(
            "-nwedges",
            String((params["nwedges"] ?? null))
        );
    }
    if ((params["ort_adjust"] ?? null) !== null) {
        cargs.push(
            "-ort_adjust",
            String((params["ort_adjust"] ?? null))
        );
    }
    if ((params["pre_stim"] ?? null) !== null) {
        cargs.push(
            "-pre_stim",
            String((params["pre_stim"] ?? null))
        );
    }
    if ((params["sum_adjust"] ?? null) !== null) {
        cargs.push(
            "-sum_adjust",
            (params["sum_adjust"] ?? null)
        );
    }
    if ((params["phase_estimate"] ?? null) !== null) {
        cargs.push(
            "-phase_estimate",
            (params["phase_estimate"] ?? null)
        );
    }
    if ((params["ref_ts"] ?? null) !== null) {
        cargs.push(
            "-ref_ts",
            execution.inputFile((params["ref_ts"] ?? null))
        );
    }
    if ((params["multi_ref_ts"] ?? null) !== null) {
        cargs.push(
            "-multi_ref_ts",
            execution.inputFile((params["multi_ref_ts"] ?? null))
        );
    }
    return cargs;
}


function v_3d_retino_phase_outputs(
    params: V3dRetinoPhaseParameters,
    execution: Execution,
): V3dRetinoPhaseOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dRetinoPhaseOutputs = {
        root: execution.outputFile("."),
        ecc_plus: execution.outputFile([(params["prefix"] ?? null), ".ecc+"].join('')),
        ecc_minus: execution.outputFile([(params["prefix"] ?? null), ".ecc-"].join('')),
        pol_plus: execution.outputFile([(params["prefix"] ?? null), ".pol+"].join('')),
        pol_minus: execution.outputFile([(params["prefix"] ?? null), ".pol-"].join('')),
    };
    return ret;
}


function v_3d_retino_phase_execute(
    params: V3dRetinoPhaseParameters,
    execution: Execution,
): V3dRetinoPhaseOutputs {
    /**
     * Process time series from retinotopy stimuli to create phase datasets and visual field angle datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dRetinoPhaseOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_retino_phase_cargs(params, execution)
    const ret = v_3d_retino_phase_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_retino_phase(
    prefix: string,
    dataset: InputPathType,
    exp: string | null = null,
    con: string | null = null,
    clw: string | null = null,
    ccw: string | null = null,
    spectra: boolean = false,
    tstim: number | null = null,
    nrings: number | null = null,
    nwedges: number | null = null,
    ort_adjust: number | null = null,
    pre_stim: number | null = null,
    sum_adjust: string | null = null,
    phase_estimate: string | null = null,
    ref_ts: InputPathType | null = null,
    multi_ref_ts: InputPathType | null = null,
    runner: Runner | null = null,
): V3dRetinoPhaseOutputs {
    /**
     * Process time series from retinotopy stimuli to create phase datasets and visual field angle datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Prefix of output datasets.
     * @param dataset Time series from a retinotopy stimulus.
     * @param exp Expanding rings stimulus.
     * @param con Contracting rings stimulus.
     * @param clw Clockwise moving polar angle mapping stimulus.
     * @param ccw Counterclockwise moving polar angle mapping stimulus.
     * @param spectra Output amplitude and phase spectra datasets.
     * @param tstim Period of stimulus in seconds.
     * @param nrings Number of rings in the stimulus. Default is 1.
     * @param nwedges Number of wedges in the stimulus. Default is 1.
     * @param ort_adjust Number of DOF lost in detrending outside of this program.
     * @param pre_stim Blank period, in seconds, before stimulus began.
     * @param sum_adjust Adjust sum of angles for wrapping based on the angle difference. Default is 'y'.
     * @param phase_estimate Method of phase estimation.
     * @param ref_ts 0 lag reference time series of response for DELAY phase estimation method.
     * @param multi_ref_ts Multiple 0 lag reference time series. This allows you to test multiple regressors.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dRetinoPhaseOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_RETINO_PHASE_METADATA);
    const params = v_3d_retino_phase_params(prefix, dataset, exp, con, clw, ccw, spectra, tstim, nrings, nwedges, ort_adjust, pre_stim, sum_adjust, phase_estimate, ref_ts, multi_ref_ts)
    return v_3d_retino_phase_execute(params, execution);
}


export {
      V3dRetinoPhaseOutputs,
      V3dRetinoPhaseParameters,
      V_3D_RETINO_PHASE_METADATA,
      v_3d_retino_phase,
      v_3d_retino_phase_params,
};
